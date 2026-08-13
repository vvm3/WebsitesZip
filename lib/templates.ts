import { escapeHtml, getTableFromFields } from "../utils/utils";
import { mailFooter, mailHeading, mailParagraph } from "./config";
import { CareerFormValues, ContactFormValues, DemoFormValues, NotifyMeValues, RequestValues } from "./validations";

const templateLabels = {
  demo: {
    heading: "New Demo Request Received",
    greeting: "Hello Sales Team,",
    intro: "You have received a new demo request. Here are the details:",
  },
  contact: {
    heading: "New Contact Request Received",
    greeting: "Hello Support Team,",
    intro: "You have received a new contact enquiry. Here are the details:",
  },
  career: {
    heading: "New Career Request Received",
    greeting: "Hello HR Team,",
    intro: "You have received a new career enquiry. Here are the details:",
  },
} as const;

export function getMailBody({ data, type }: { data: ContactFormValues | CareerFormValues | DemoFormValues | RequestValues, type: "demo" | "contact" | "career" }): string {
  const replyToEmail = escapeHtml((data as DemoFormValues | ContactFormValues | CareerFormValues)?.Email ?? "");
  const copy = templateLabels[type];

  return (
    `
    <div style="font-family: Arial, sans-serif; background-color: #ffffff; padding: 20px;">
        ${mailHeading(copy.heading)}
        <div style="text-align: center;">
          ${mailParagraph(copy.greeting)}
          <h3 style="font-size:24px; margin:8px 0">${escapeHtml(copy.intro)}</h3>
        </div>
      <div style="background-color: #f5f5f5; padding: 20px; box-sizing: border-box; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); width: 100%;">
          <table style="width: 100%; margin: 0 auto; border-collapse: collapse; margin-top: 16px;">
            ${getTableFromFields(data)}
          </table>
          <div style="margin: 12px auto;">
            <a href="mailto:${replyToEmail}" style="display: inline-block; padding: 12px 24px; background-color: #002A77; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; text-align: center;">
            Reply to Customer
            </a>
          </div>
      </div>
      ${mailFooter}
    </div>`
  );
}

export function getNotifyMeMailBody(data: NotifyMeValues): string {
  const email = escapeHtml(data.email);

  return `
    <div style="font-family: Arial, sans-serif; background-color: #ffffff; padding: 20px; max-width: 640px; margin: 0 auto;">
      ${mailHeading("New Notify Me Request")}

      <div style="text-align: center; margin-bottom: 20px;">
        ${mailParagraph("Hello Support Team,")}
        <p style="font-size: 16px; line-height: 1.5; color: #333; margin: 8px 0 0;">
          A visitor asked to be added to the notify list for the Under Development pages.
        </p>
      </div>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; border-radius: 8px; border-collapse: separate;">
        <tr>
          <td style="padding: 24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
              <tr>
                <td style="font-weight: bold; width: 100px; color: #555; padding: 10px 12px 10px 0; vertical-align: top; font-size: 14px;">
                  Email
                </td>
                <td style="padding: 10px 0; color: #111; font-size: 14px; word-break: break-all;">
                  <a href="mailto:${email}" style="color: #002A77; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="font-weight: bold; width: 100px; color: #555; padding: 10px 12px 10px 0; vertical-align: top; font-size: 14px;">
                  Action
                </td>
                <td style="padding: 10px 0; color: #111; font-size: 14px;">
                  Please add this email to the notify / waitlist.
                </td>
              </tr>
            </table>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px;">
              <tr>
                <td align="center">
                  <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background-color: #002A77; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">
                    Contact Subscriber
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      ${mailFooter}
    </div>
  `;
}

