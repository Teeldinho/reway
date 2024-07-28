import { SearchSchema } from "@/lib/types/types-and-schemas";
import { getDefaults } from "@/lib/utils";
import { createSearchParamsCache, parseAsString, createSerializer } from "nuqs/server";

export const searchParamsParsers = {
  q: parseAsString.withDefault(getDefaults(SearchSchema).search),
};

export const searchParamsCache = createSearchParamsCache(searchParamsParsers);

export const searchParamsSerializer = createSerializer(searchParamsParsers);
