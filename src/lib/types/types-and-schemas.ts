import { ColourEnum } from "@/components/custom-reusable/header/desktop/side-nav/forms/helpers/color-helpers";
import { NavLinks } from "@/components/custom-reusable/header/navLinks";
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
  color: z.nativeEnum(ColourEnum).nullable(),
  pricingRange: z
    .number()
    .min(0, {
      message: "Price must be at least 0.",
    })
    .max(2500)
    .default(0),
});

export type SearchAndFilterFormSchemaType = z.infer<typeof SearchAndFilterFormSchema>;

export const BrandSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
});

export type Brand = z.infer<typeof BrandSchema>;

// Extract titles from NavLinks to maintain a 1-to-1 relationship with the categories:
const categoryTitles = NavLinks.map((navLink) => navLink.title) as unknown as [string, ...string[]];

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  priceAfterDiscount: z.number(),
  stockRemaining: z.number(),
  metadata: z.object({
    fabrication: z.string(),
    colour: z.nativeEnum(ColourEnum),
    brandId: z.string(),
    details: z.array(z.string()),
  }),
  sizes: z.array(z.string()),
  categories: z.array(z.enum(categoryTitles)),
});

export type Product = z.infer<typeof ProductSchema>;
