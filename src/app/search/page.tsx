import type { Metadata } from "next";
import ProductCard from "@/components/custom-reusable/products/ProductCard";
import { Separator } from "@/components/ui/separator";
import { dummyProductsData } from "@/lib/dummy-data";
import { CollectionSlug, generateSlug } from "@/lib/types/product-helpers";
import { searchParamsCache } from "@/stores/nuqs/slices/searchSlice";
import Link from "next/link";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Search({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const { q } = searchParamsCache.parse(searchParams);

  let searchProductsResults = dummyProductsData;

  // Apply search
  if (q) {
    searchProductsResults = searchProductsResults.filter((product) => product.name.toLowerCase().includes(q.toLowerCase()));
  }

  return (
    <div className="flex-1 flex flex-col gap-8">
      <div className="w-full space-y-8">
        <div className="space-y-1">
          <p className="text-sm text-rewayGrey font-ptSans font-semibold tracking-widest">
            {q ? "Now showing products with search term:" : "Now showing all products"}
          </p>
          <h1 className="font-suezOne text-3xl uppercase">{`${q ?? "All Products"}`}</h1>
        </div>

        <Separator className="w-full" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {searchProductsResults.map((product) => (
          <Link prefetch={false} href={`/${CollectionSlug[product.collection]}/${generateSlug(product.name)}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
