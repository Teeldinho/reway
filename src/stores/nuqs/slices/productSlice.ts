import { ProductOptionsSchema } from "@/lib/types/shop-schemas";
import { createSearchParamsCache, parseAsString, parseAsJson, createSerializer } from "nuqs/server";

export const productParamsParsers = {
  slug: parseAsString,
  options: parseAsJson(ProductOptionsSchema.parse),
};

export const productOptionsParamsCache = createSearchParamsCache(productParamsParsers);

export const productOptionsParamsSerializer = createSerializer(productParamsParsers);
