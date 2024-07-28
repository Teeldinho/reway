import { z } from "zod";
import { ColourEnum } from "@/lib/types/colour-helpers";
import { BrandSchema } from "@/lib/types/shop-schemas";

export const MailListFormSchema = z.object({
  email: z
    .string({
      required_error: "Please enter your email address.",
    })
    .email({ message: "Please enter a valid email address." }),
});

export type MailListFormSchemaType = z.infer<typeof MailListFormSchema>;

export const SearchAndFilterFormSchema = z.object({
  brands: z.array(BrandSchema).default([]),
  color: z.nativeEnum(ColourEnum).nullable(),
  pricingRange: z.number().min(0, {
    message: "Price must be at least 0.",
  }),
});

export type SearchAndFilterFormSchemaType = z.infer<typeof SearchAndFilterFormSchema>;

export const SearchSchema = z.object({
  query: z.string().min(3, { message: "Search term must be at least 3 characters. Please try again." }),
});

export type SearchType = z.infer<typeof SearchSchema>;
