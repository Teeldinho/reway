import ProductCard from "@/components/custom-reusable/products/ProductCard";
import { Separator } from "@/components/ui/separator";
import { dummyBrandsData, dummyProductsData } from "@/lib/dummy-data";
import { CollectionSlug, generateSlug, getBrandForProduct } from "@/lib/types/product-helpers";
import { filterParamsCache } from "@/stores/nuqs/slices/filterSlice";
import { searchParamsCache } from "@/stores/nuqs/slices/searchSlice";
import Link from "next/link";

export default function Search({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const { q } = searchParamsCache.parse(searchParams);
  const filters = filterParamsCache.parse(searchParams);

  console.log("\n\nQ", q);
  console.log("\n\nFilters", filters);

  let filteredProducts = dummyProductsData;

  // Apply search
  if (q) {
    filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(q.toLowerCase()));
  }

  if (filters) {
    // Apply brand filter
    if (filters.brands && filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.brands!.includes(getBrandForProduct(dummyBrandsData, product.metadata.brandId))
      );
    }

    // Apply color filter
    if (filters.color) {
      filteredProducts = filteredProducts.filter((product) => product.metadata.colour === filters.color);
    }

    if (filters.pricingRange) {
      filteredProducts = filteredProducts.filter((product) => product.price <= filters.pricingRange);
    }
  }

  // Apply pricing filter
  filteredProducts = filteredProducts.filter((product) => product.priceAfterDiscount <= filters.pricingRange);

  return (
    <div className="flex-1 flex flex-col gap-8">
      <div className="w-full space-y-8">
        <div className="space-y-1">
          <p className="text-sm text-rewayGrey font-ptSans font-semibold tracking-widest">
            {q ? "Now showing products with search term and applied filters:" : "Now showing all products with filters applied."}
          </p>
          <h1 className="font-suezOne text-3xl uppercase">{`${q ?? "All Products"}`}</h1>
        </div>

        <Separator className="w-full" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {filteredProducts.map((product) => (
          <Link href={`/${CollectionSlug[product.collection]}/${generateSlug(product.name)}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
