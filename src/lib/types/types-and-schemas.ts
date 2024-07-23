import { z } from "zod";

export const MailListFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type MailListFormSchemaType = z.infer<typeof MailListFormSchema>;
