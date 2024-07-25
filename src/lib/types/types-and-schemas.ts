import { z } from "zod";
import { CollectionsEnum } from "@/lib/types/product-helpers";
import { ColourEnum } from "@/lib/types/colour-helpers";

export const MailListFormSchema = z.object({
  email: z
    .string({
      required_error: "Please enter your email address.",
    })
    .email({ message: "Please enter a valid email address." }),
});

export type MailListFormSchemaType = z.infer<typeof MailListFormSchema>;

export const BrandSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
});

export type Brand = z.infer<typeof BrandSchema>;

export const SearchAndFilterFormSchema = z.object({
  brands: z.array(BrandSchema).default([]),
  color: z.nativeEnum(ColourEnum).nullable(),
  pricingRange: z.number().min(0, {
    message: "Price must be at least 0.",
  }),
});

export type SearchAndFilterFormSchemaType = z.infer<typeof SearchAndFilterFormSchema>;

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  collection: z.nativeEnum(CollectionsEnum),
});

export type Category = z.infer<typeof CategorySchema>;

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  priceAfterDiscount: z.number(),
  stockRemaining: z.number(),
  images: z.array(z.string()),
  metadata: z.object({
    fabrication: z.string(),
    colour: z.nativeEnum(ColourEnum),
    brandId: z.string(),
    details: z.array(z.string()),
  }),
  sizes: z.array(z.string()),
  collection: z.nativeEnum(CollectionsEnum),
  categories: z.array(CategorySchema.shape.id),
});

export type Product = z.infer<typeof ProductSchema>;

export const ProductOptionsSchema = z.object({
  size: z.string({
    required_error: "Please select an email to display.",
  }),
  quantity: z
    .number({
      required_error: "Please select a quantity.",
    })
    .min(1, { message: "Quantity must be at least 1." }),
});

export type ProductOptionsType = z.infer<typeof ProductOptionsSchema>;
