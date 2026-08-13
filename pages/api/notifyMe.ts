import type { NextApiRequest, NextApiResponse } from "next";
import {
  MAIL_FROM_ADDRESS,
  NOTIFY_ME_EMAIL_TO_ADDRESS,
  ZEPTO_TOKEN,
} from "../../lib/config";
import { sendEmail } from "../../lib/sendMail";
import { getNotifyMeMailBody } from "../../lib/templates";
import { NotifyMeSchema } from "../../lib/validations";
import { messages } from "../../lib/messages";
import {
  assertJsonPost,
  assertTrustedRequest,
  createInMemoryRateLimiter,
  getClientIp,
  sanitizeEmailHeaderValue,
} from "../../lib/apiGuards";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "16kb",
    },
  },
};

const rateLimit = createInMemoryRateLimiter();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Cache-Control", "no-store");

  if (!assertJsonPost(req, res)) return;
  if (!assertTrustedRequest(req, res)) return;

  const ip = getClientIp(req);
  if (!rateLimit(ip, 5, 60_000)) {
    return res.status(429).json({ error: messages.response.tooManyRequests });
  }

  let parsed;
  try {
    parsed = NotifyMeSchema.parse(req.body);
  } catch {
    return res.status(400).json({ error: messages.validation.formValidationFailed });
  }

  if (parsed.hp && parsed.hp.trim().length > 0) {
    return res.status(200).json({ status: "ok" });
  }

  if (!NOTIFY_ME_EMAIL_TO_ADDRESS) {
    return res.status(500).json({ error: "Support email is not configured" });
  }

  const safeEmail = sanitizeEmailHeaderValue(parsed.email);
  const zeptoPayload = {
    from: { address: MAIL_FROM_ADDRESS, name: "Website Notify Me" },
    to: [
      {
        email_address: {
          address: NOTIFY_ME_EMAIL_TO_ADDRESS,
          name: "Notify Me Team",
        },
      },
    ],
    subject: `[Notify Me] Add ${safeEmail} to waitlist`,
    htmlbody: getNotifyMeMailBody(parsed),
  };

  try {
    if (!ZEPTO_TOKEN) {
      throw new Error(messages.zeptoMail.tokenNotSet);
    }
    const result = await sendEmail(JSON.stringify(zeptoPayload));
    return res.status(200).json({ status: "sent", result });
  } catch (err) {
    console.error(messages.zeptoMail.mailSendError, err);
    return res.status(502).json({ error: messages.zeptoMail.mailSendError });
  }
}
