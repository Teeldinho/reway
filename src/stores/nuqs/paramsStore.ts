import { filterParamsCache } from "@/stores/nuqs/slices/filterSlice";
import { productOptionsParamsCache } from "./slices/productSlice";
import { searchParamsCache } from "./slices/searchSlice";
import { useSearch } from "./hooks/useSearch";
import { useProduct } from "./hooks/useProduct";
import { useFilters } from "./hooks/useFilters";

// This is called from client components:
export const useParamsStoreClient = () => {
  return {
    search: useSearch,
    product: useProduct,
    filters: useFilters,
  };
};

// This is called from server components:
export const useParamsStoreServer = {
  search: searchParamsCache,
  product: productOptionsParamsCache,
  filters: filterParamsCache,
};
