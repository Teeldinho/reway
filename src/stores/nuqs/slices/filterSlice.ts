import { ColourEnum } from "@/lib/types/colour-helpers";
import { createSearchParamsCache, parseAsArrayOf, parseAsStringEnum, parseAsInteger, parseAsString, createSerializer } from "nuqs/server";

export const filterParamsParsers = {
  brands: parseAsArrayOf(parseAsString),
  color: parseAsStringEnum<ColourEnum>(Object.values(ColourEnum)),
  pricingRange: parseAsInteger,
};

export const filterParamsCache = createSearchParamsCache(filterParamsParsers);

export const filterParamsSerializer = createSerializer(filterParamsParsers);
