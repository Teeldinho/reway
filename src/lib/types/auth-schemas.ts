import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password must be 100 characters or less." }),
});

export type SignInType = z.infer<typeof SignInSchema>;

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  surname: z.string().min(1, { message: "Surname is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password must be 100 characters or less." }),
});

export type SignUpType = z.infer<typeof SignUpSchema>;
