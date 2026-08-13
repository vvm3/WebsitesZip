import { messages } from "@/lib/messages";

// Validation / Types
import { z } from "zod";

// Zod schema for the form
export const DemoSchema = z.object({
    FullName: z.string().trim().min(1, messages.validation.general.fullNameRequired).max(500, messages.validation.general.maxLength("Full Name", 500)),
    Email: z.string().trim().email(messages.validation.general.invalidEmail),
    PhoneNumber: z.string().trim().min(2, messages.validation.general.phoneNumberRequired).max(50, messages.validation.general.maxLength("Phone Number", 50)),
    Institute: z.string().trim().min(2, messages.validation.demoRequest.instituteRequired).max(200, messages.validation.general.maxLength("Institute", 200)),
    // Website: z.string().min(2, messages.validation.general.websiteUrlRequired).max(200, messages.validation.general.maxLength("Website", 200)).regex(/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/, messages.validation.general.invalidUrl),
    // Solution: z.string().min(1, messages.validation.demoRequest.selectSolution).max(200, messages.validation.general.maxLength("Solution", 200)),
    Message: z.string().trim().max(1000, messages.validation.general.maxLength("Message", 1000)).optional(),
    hp: z.string().trim().optional(),
});


export type ContactFormValues = z.infer<typeof DemoSchema>;