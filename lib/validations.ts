import z from "zod";

/* ---------- Schemas ---------- */
export const ContactSchema = z.object({
    name: z.string().trim().min(1).max(100),
    Email: z.string().trim().email(),
    message: z.string().trim().min(1).max(5000),
    hp: z.string().trim().optional(),
});
export type ContactFormValues = z.infer<typeof ContactSchema>;

export const CareerSchema = z.object({
    name: z.string().trim().min(1).max(100),
    Email: z.string().trim().email(),
    resumeUrl: z.string().trim().url().optional(),
    message: z.string().trim().max(5000).optional(),
    hp: z.string().trim().optional(),
});
export type CareerFormValues = z.infer<typeof CareerSchema>;

export const DemoSchema = z.object({
    FullName: z.string().trim().min(1).max(500),
    Email: z.string().trim().email(),
    PhoneNumber: z.string().trim().min(2).max(50),
    Institute: z.string().trim().min(2).max(200),
    // Website: z.string().max(200),
    // Solution: z.string().max(200),
    Message: z.string().trim().max(1000).optional(),
    hp: z.string().trim().optional(),
});
export type DemoFormValues = z.infer<typeof DemoSchema>;

export const RequestSchema = z.object({
    formType: z.enum(['contact', 'career', 'demo']),
    fields: DemoSchema.or(ContactSchema).or(CareerSchema),
    captchaToken: z.string().min(10).optional(),
});
export type RequestValues = z.infer<typeof RequestSchema>;

export const NotifyMeSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .max(254, "Email must be at most 254 characters")
        .email("Please enter a valid email address")
        .regex(
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            "Please enter a valid email address"
        ),
    hp: z.string().trim().optional(),
});
export type NotifyMeValues = z.infer<typeof NotifyMeSchema>;