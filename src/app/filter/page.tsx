import type { Metadata } from "next";
import ProductCard from "@/components/custom-reusable/products/ProductCard";
import { Separator } from "@/components/ui/separator";
import { dummyBrandsData, dummyProductsData } from "@/lib/dummy-data";
import { CollectionSlug, generateSlug, getBrandForProduct } from "@/lib/types/product-helpers";
import { filterParamsCache } from "@/stores/nuqs/slices/filterSlice";
import Link from "next/link";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Filter({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const filters = filterParamsCache.parse(searchParams);

  const hasBrandFilters = Array.isArray(filters.brands) && filters.brands.length > 0;
  const hasColorFilter = Boolean(filters.color);
  const hasPricingRangeFilter = typeof filters.pricingRange === "number";
  const hasActiveFilters = hasBrandFilters || hasColorFilter || hasPricingRangeFilter;
  const brandFilters = hasBrandFilters ? filters.brands : [];

  let filteredProducts = dummyProductsData;

  if (hasActiveFilters) {
    // Apply brand filter
    if (hasBrandFilters) {
      filteredProducts = filteredProducts.filter((product) =>
        brandFilters.includes(getBrandForProduct(dummyBrandsData, product.metadata.brandId))
      );
    }

    // Apply color filter
    if (filters.color) {
      filteredProducts = filteredProducts.filter((product) => product.metadata.colour === filters.color);
    }

    const pricingRange = filters.pricingRange;

    if (typeof pricingRange === "number") {
      filteredProducts = filteredProducts.filter((product) => product.price <= pricingRange);
    }
  }

  return (
    <div className="flex-1 flex flex-col gap-8">
      <div className="w-full space-y-8">
        <div className="space-y-1">
          <p className="text-sm text-rewayGrey font-ptSans font-semibold tracking-widest">
            {hasActiveFilters ? "Now showing products that match the criteria:" : "Now showing all products"}
          </p>
          <h1 className="font-suezOne text-3xl uppercase">{hasActiveFilters ? "Filtered Products" : "All Products"}</h1>
        </div>

        <Separator className="w-full" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {filteredProducts.map((product) => (
          <Link prefetch={false} href={`/${CollectionSlug[product.collection]}/${generateSlug(product.name)}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
