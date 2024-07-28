import { ColourEnum } from "@/lib/types/colour-helpers";
import { SearchAndFilterFormSchema } from "@/lib/types/types-and-schemas";
import { getDefaults } from "@/lib/utils";
import { createSearchParamsCache, parseAsArrayOf, parseAsStringEnum, parseAsInteger, parseAsString, createSerializer } from "nuqs/server";

export const filterParamsParsers = {
  brands: parseAsArrayOf(parseAsString),
  color: parseAsStringEnum<ColourEnum>(Object.values(ColourEnum)),
  pricingRange: parseAsInteger.withDefault(getDefaults(SearchAndFilterFormSchema).pricingRange),
};

export const filterParamsCache = createSearchParamsCache(filterParamsParsers);

export const filterParamsSerializer = createSerializer(filterParamsParsers);
