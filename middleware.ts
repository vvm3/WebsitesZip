import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { parseEnvFlag } from "./lib/env";

/**
 * When UNDER_DEVELOPMENT is enabled, only `/` is a valid page route.
 * Everything else (except assets / Next internals / notify API) redirects home.
 */
export function middleware(request: NextRequest) {
  const underDevelopment = parseEnvFlag(process.env.UNDER_DEVELOPMENT);
  const contactFormEnabled = parseEnvFlag(process.env.CONTACT_FORM_ENABLED);
  if (!underDevelopment) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow framework, static assets, and the notify-me API used on the under-dev page.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/api/notifyMe") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  if (pathname !== "/" && (pathname !== "/contact" && !contactFormEnabled)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
