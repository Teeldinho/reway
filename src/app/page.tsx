import ProductCard from "@/components/custom-reusable/products/ProductCard";
import ProductDetailsInfo from "@/components/custom-reusable/products/ProductDetailsInfo";
import ProductOptions from "@/components/custom-reusable/products/ProductOptions";
import ProductPreview from "@/components/custom-reusable/products/ProductPreview";
import { Separator } from "@/components/ui/separator";
import { dummyProductsData } from "@/lib/dummy-data";
import { CollectionDisplayName, generateSlug } from "@/lib/types/product-helpers";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <div className="w-full space-y-8">
        <h1 className="font-suezOne text-3xl uppercase">Shop All</h1>

        <Separator className="w-full" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {dummyProductsData.map((product) => (
          <Link href={`/${generateSlug(CollectionDisplayName[product.collection])}/${generateSlug(product.name)}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      {/* <ProductDetailsInfo product={dummyProductsData[5]} /> */}

      {/* <ProductOptions product={dummyProductsData[7]} /> */}

      {/* <ProductPreview product={dummyProductsData[0]} /> */}
    </div>
  );
}
