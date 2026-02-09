import CollectionHeading from "@/components/custom-reusable/products/CollectionHeading";
import ProductCard from "@/components/custom-reusable/products/ProductCard";
import { Separator } from "@/components/ui/separator";
import { dummyProductsData } from "@/lib/dummy-data";
import { CollectionSlug, CollectionsEnum, generateSlug } from "@/lib/types/product-helpers";
import Link from "next/link";

export default function Gift() {
  const collectionId = CollectionsEnum.GIFT;
  const filteredProducts = dummyProductsData.filter((product) => product.collection === collectionId);

  return (
    <div className="flex-1 flex flex-col gap-8">
      <div className="w-full space-y-8">
        <CollectionHeading collectionId={collectionId} />

        <Separator className="w-full" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {filteredProducts.map((product) => (
          <Link prefetch={false} href={`/${CollectionSlug[collectionId]}/${generateSlug(product.name)}`} key={product.id}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
