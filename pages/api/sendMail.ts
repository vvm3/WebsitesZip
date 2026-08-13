// /api/sendMail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { FORM_MAP, ZEPTO_TOKEN } from "../../lib/config";
import { sendEmail } from "../../lib/sendMail";
import {
  RequestSchema,
  ContactSchema,
  CareerSchema,
  DemoSchema,
  CareerFormValues,
  RequestValues,
  DemoFormValues,
} from "../../lib/validations";
import { getMailBody } from "../../lib/templates";
import { messages } from "../../lib/messages";
import { ContactFormValues } from "@/config/zodschemas";
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
      sizeLimit: "64kb",
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

  let parsedReq;
  try {
    parsedReq = RequestSchema.parse(req.body);
  } catch {
    return res.status(400).json({ error: messages.response.invalidRequest });
  }

  let validatedFields: ContactFormValues | CareerFormValues | DemoFormValues | RequestValues;
  try {
    if (parsedReq.formType === "contact") {
      validatedFields = ContactSchema.parse(parsedReq.fields);
    } else if (parsedReq.formType === "career") {
      validatedFields = CareerSchema.parse(parsedReq.fields);
    } else if (parsedReq.formType === "demo") {
      validatedFields = DemoSchema.parse(parsedReq.fields);
    } else {
      return res.status(400).json({ error: messages.validation.unknownFormType });
    }
  } catch {
    return res.status(400).json({ error: messages.validation.formValidationFailed });
  }

  if (validatedFields.hp && validatedFields.hp.trim().length > 0) {
    return res.status(200).json({ status: "ok" });
  }

  const map = FORM_MAP[parsedReq.formType];
  const subject = sanitizeEmailHeaderValue(
    `${map.subjectPrefix} Request From ${validatedFields.Email ?? ""}`
  );

  const zeptoPayload = {
    from: { address: map.from.address, name: map.from.name ?? "" },
    to: map.to.map((t) => ({ email_address: { address: t.address, name: t.name } })),
    subject,
    htmlbody: getMailBody({ data: validatedFields, type: parsedReq.formType }),
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
