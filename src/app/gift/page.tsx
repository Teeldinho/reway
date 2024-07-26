import ProductCard from "@/components/custom-reusable/products/ProductCard";
import { Separator } from "@/components/ui/separator";
import { dummyProductsData } from "@/lib/dummy-data";
import { CollectionDisplayName, CollectionsEnum, generateSlug } from "@/lib/types/product-helpers";
import Link from "next/link";

export default function Gift() {
  const collectionId = CollectionsEnum.GIFT;
  const filteredProducts = dummyProductsData.filter((product) => product.collection === collectionId);

  return (
    <div className="flex-1 flex flex-col gap-8">
      <div className="w-full space-y-8">
        <div className="space-y-1">
          <p className="text-sm text-primary font-ptSans font-semibold tracking-widest">Collection</p>
          <h1 className="font-suezOne text-3xl uppercase">{CollectionDisplayName[collectionId]}</h1>
        </div>

        <Separator className="w-full" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {filteredProducts.map((product) => (
          <Link href={`/${generateSlug(CollectionDisplayName[collectionId])}/${generateSlug(product.name)}`} key={product.id}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
