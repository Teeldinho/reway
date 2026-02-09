import { createSearchParamsCache, parseAsString, createSerializer } from "nuqs/server";

export const searchParamsParsers = {
  q: parseAsString,
};

export const searchParamsCache = createSearchParamsCache(searchParamsParsers);

export const searchParamsSerializer = createSerializer(searchParamsParsers);
