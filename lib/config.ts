import { ISendMailDetails } from "../interfaces/mail";

// Environment
export const MAIL_DOMAIN = process.env.MAIL_DOMAIN || 'serateksys.com';
export const MAIL_API = process.env.MAIL_API || 'https://api.zeptomail.in/v1.1/email';
// export const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;
export const ZEPTO_TOKEN = process.env.ZEPTO_SEND_MAIL_TOKEN;
export const MAIL_FROM_ADDRESS = process.env.MAIL_FROM_ADDRESS || `info@${MAIL_DOMAIN}`;
export const SUPPORT_EMAIL_ADDRESS = process.env.SUPPORT_EMAIL_ADDRESS || `support@${MAIL_DOMAIN}`;
export const HR_EMAIL_ADDRESS = process.env.HR_EMAIL_ADDRESS || `hr@${MAIL_DOMAIN}`;
export const NOTIFY_ME_EMAIL_TO_ADDRESS = process.env.NOTIFY_ME_EMAIL_TO_ADDRESS || `info@${MAIL_DOMAIN}`;
export const SALES_EMAIL_ADDRESS = process.env.SALES_EMAIL_ADDRESS || `sales@${MAIL_DOMAIN}`;
export const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGIN
    ? process.env.ALLOWED_ORIGIN.split(",")
    : ["https://serateksys.com", "https://www.serateksys.com"]
).map((origin) => origin.trim()).filter(Boolean);

/* map formType => recipient and from address (server-only) */
export const FORM_MAP: Record<string, ISendMailDetails> = {
    contact: {
        to: [{ address: SUPPORT_EMAIL_ADDRESS, name: 'Support Team' }],
        from: { address: MAIL_FROM_ADDRESS, name: 'Website Support' },
        subjectPrefix: '[Contact Us]',
    },
    career: {
        to: [{ address: HR_EMAIL_ADDRESS, name: 'HR Team' }],
        from: { address: MAIL_FROM_ADDRESS, name: 'Website Careers' },
        subjectPrefix: '[Career]',
    },
    demo: {
        to: [{ address: SALES_EMAIL_ADDRESS, name: 'Sales Team' }],
        from: { address: MAIL_FROM_ADDRESS, name: 'Website Sales' },
        subjectPrefix: '[Demo]',
    },
} as const;

export const mailHeading = (label: string) => `<h2 style="color: #002A77; font-size: 24px; margin-bottom: 16px; text-align: center;">
      ${label}
    </h2>`

export const mailParagraph = (text: string) => `<p style="font-size: 16px; margin: 8px 0;">${text}</p>`
export const mailFooter = `<div style="margin-top: 32px; font-size: 12px; color: #999; text-align: center;">
      &copy; ${new Date().getFullYear()} Seratek ERP. All rights reserved.
    </div>`