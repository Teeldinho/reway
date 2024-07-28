import { useQueryStates } from "nuqs";
import { productParamsParsers } from "@/stores/nuqs/slices/productSlice";

export function useProduct() {
  return useQueryStates(productParamsParsers);
}
