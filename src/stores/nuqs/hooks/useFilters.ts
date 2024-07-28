import { useQueryStates } from "nuqs";
import { filterParamsParsers } from "@/stores/nuqs/slices/filterSlice";

export function useFilters() {
  return useQueryStates(filterParamsParsers);
}
