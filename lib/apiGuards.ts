import type { NextApiRequest, NextApiResponse } from "next";
import { ALLOWED_ORIGINS } from "./config";
import { messages } from "./messages";

type RateRecord = { ts: number; count: number };

/** Lightweight in-memory rate limiter (per process). Prefer Redis in production. */
export function createInMemoryRateLimiter() {
  const store: Record<string, RateRecord> = {};

  return function simpleRateLimit(ip: string, limit = 5, windowMs = 60_000) {
    const now = Date.now();
    const rec = store[ip] ?? { ts: now, count: 0 };
    if (now - rec.ts > windowMs) {
      rec.ts = now;
      rec.count = 0;
    }
    rec.count += 1;
    store[ip] = rec;
    return rec.count <= limit;
  };
}

function normalizeOrigin(value: string): string {
  return value.trim().replace(/\/+$/, "");
}

export function isAllowedOrigin(value: string): boolean {
  const normalized = normalizeOrigin(value);
  return ALLOWED_ORIGINS.some((origin) => normalizeOrigin(origin) === normalized);
}

export function getClientIp(req: NextApiRequest): string {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  if (Array.isArray(forwardedFor) && forwardedFor[0]) {
    return forwardedFor[0].split(",")[0]?.trim() || "unknown";
  }
  return req.socket.remoteAddress || "unknown";
}

/** Ensures POST + JSON content-type. Sends response and returns false when invalid. */
export function assertJsonPost(req: NextApiRequest, res: NextApiResponse): boolean {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: messages.response.methodNotAllowed });
    return false;
  }

  const contentType = req.headers["content-type"] || "";
  if (!contentType.includes("application/json")) {
    res.status(415).json({ error: "Unsupported content type" });
    return false;
  }

  return true;
}

/**
 * Same-origin / same-site request gate using Sec-Fetch-Site, Origin, and Referer.
 * Rejects cross-site requests and headerless clients (e.g. bare curl) that omit
 * Origin, Referer, and a same-site Sec-Fetch-Site value.
 * Sends a 403 and returns false when the request is rejected.
 */
export function assertTrustedRequest(req: NextApiRequest, res: NextApiResponse): boolean {
  const origin = (req.headers.origin as string) || "";
  const referer = (req.headers.referer as string) || "";
  const fetchSite = (req.headers["sec-fetch-site"] as string) || "";

  // Explicit cross-site browser requests are never allowed.
  if (fetchSite === "cross-site") {
    res.status(403).json({ error: messages.response.originForbidden });
    return false;
  }

  let hasAllowedOrigin = false;
  if (origin) {
    if (!isAllowedOrigin(origin)) {
      res.status(403).json({ error: messages.response.originForbidden });
      return false;
    }
    hasAllowedOrigin = true;
  }

  let hasAllowedReferer = false;
  if (referer) {
    try {
      if (!isAllowedOrigin(new URL(referer).origin)) {
        res.status(403).json({ error: messages.response.refererForbidden });
        return false;
      }
      hasAllowedReferer = true;
    } catch {
      res.status(403).json({ error: messages.response.refererForbidden });
      return false;
    }
  }

  const hasSameSiteFetch = fetchSite === "same-origin" || fetchSite === "same-site";

  // Require at least one positive trust signal — do not allow empty-header abuse.
  if (!hasAllowedOrigin && !hasAllowedReferer && !hasSameSiteFetch) {
    res.status(403).json({ error: messages.response.originForbidden });
    return false;
  }

  return true;
}

/** Strip CR/LF to avoid email-header injection in subjects. */
export function sanitizeEmailHeaderValue(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}
