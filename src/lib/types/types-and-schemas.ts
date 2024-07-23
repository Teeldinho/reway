import { ColorEnum } from "@/components/custom-reusable/header/desktop/side-nav/forms/helpers/color-helpers";
import { z } from "zod";

export const MailListFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type MailListFormSchemaType = z.infer<typeof MailListFormSchema>;

export const SearchAndFilterFormSchema = z.object({
  brands: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
      })
    )
    .default([]),
  color: z.nativeEnum(ColorEnum).nullable(),
  pricingRange: z
    .number()
    .min(0, {
      message: "Price must be at least 0.",
    })
    .max(2500)
    .default(0),
});

export type SearchAndFilterFormSchemaType = z.infer<typeof SearchAndFilterFormSchema>;
