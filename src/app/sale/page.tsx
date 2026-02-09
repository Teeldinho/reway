import ProductCard from "@/components/custom-reusable/products/ProductCard";
import { Separator } from "@/components/ui/separator";
import { dummyProductsData } from "@/lib/dummy-data";
import { CollectionSlug, generateSlug, getProductPercentageOff } from "@/lib/types/product-helpers";
import Link from "next/link";

// assume that this constant represents an actual sale threshold: 50% off
const PERCENTAGE_OFF_THRESHOLD = 50;

export default function Sale() {
  const filteredProducts = dummyProductsData.filter((product) => getProductPercentageOff(product) >= PERCENTAGE_OFF_THRESHOLD);

  return (
    <div className="flex-1 flex flex-col gap-8">
      <div className="w-full space-y-8">
        <div className="space-y-1">
          <p className="text-sm text-rewayGrey font-ptSans font-semibold tracking-widest">Sale</p>
          <h1 className="font-suezOne text-3xl uppercase">{`Up to ${PERCENTAGE_OFF_THRESHOLD}% off`}</h1>
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
