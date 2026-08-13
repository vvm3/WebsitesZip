// lib/sendMail.ts

import { MAIL_API, ZEPTO_TOKEN } from "./config";
import { messages } from "./messages";

export const sendEmail = async (payload: string) => {
    // Check if token is set
    if (!ZEPTO_TOKEN || ZEPTO_TOKEN.trim() === "") throw new Error(messages.zeptoMail.tokenNotSet);

    // Send email via ZeptoMail API
    const response = await fetch(MAIL_API, {
        method: "POST",
        headers: {
            Authorization: ZEPTO_TOKEN,
            "Content-Type": "application/json",
        },
        body: payload,
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`ZeptoMail failed: ${response.status} - ${errorText}`);
    }
    return { success: true };
};
