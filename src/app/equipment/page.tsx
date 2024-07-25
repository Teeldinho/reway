import ProductCard from "@/components/custom-reusable/products/ProductCard";
import { Separator } from "@/components/ui/separator";
import { dummyProductsData } from "@/lib/dummy-data";
import { CollectionsEnum } from "@/lib/types/product-helpers";

export default function Equipment() {
  const filteredProducts = dummyProductsData.filter((product) => product.collection === CollectionsEnum.EQUIPMENT);

  return (
    <div className="flex-1 flex flex-col gap-8">
      <div className="w-full space-y-8">
        <h1 className="font-suezOne text-3xl">Equipment</h1>

        <Separator className="w-full" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
