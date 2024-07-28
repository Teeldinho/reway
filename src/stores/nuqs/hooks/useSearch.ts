import { useQueryStates } from "nuqs";
import { searchParamsParsers } from "@/stores/nuqs/slices/searchSlice";

export function useSearch() {
  return useQueryStates(searchParamsParsers);
}
