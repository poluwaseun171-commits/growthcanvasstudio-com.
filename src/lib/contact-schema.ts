import { z } from "zod";

export const contactSchema = z.object({
  full_name: z.string().trim().min(1, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please choose a service").max(120),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more about your project (at least 10 characters)")
    .max(4000),
});

export type ContactValues = z.infer<typeof contactSchema>;
