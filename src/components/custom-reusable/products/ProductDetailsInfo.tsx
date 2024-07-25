import { useMemo } from "react";
import { Product } from "@/lib/types/types-and-schemas";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { dummyBrandsData } from "@/lib/dummy-data";
import { Store } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ProductDetailsList from "@/components/custom-reusable/products/ProductDetailsList";
import ProductDetailsPricing from "@/components/custom-reusable/products/ProductDetailsPricing";
import ProductDetailsMetadata from "@/components/custom-reusable/products/ProductDetailsMetadata";
import { getBrandForProduct } from "@/lib/types/product-helpers";

type ProductCardProps = {
  product: Product;
};

export default function ProductDetailsInfoCard({ product }: ProductCardProps) {
  const brand = useMemo(() => getBrandForProduct(dummyBrandsData, product.metadata.brandId), [product]);

  return (
    <Card className="border-[6px] border-primary max-w-[355px] md:min-w-[355px] w-full">
      <CardHeader className="p-5">
        <CardTitle className="p-0 font-suezOne text-[20px] leading-[26.12px] text-black uppercase font-normal">{product.name}</CardTitle>
        <CardDescription className="font-ptSans font-bold flex items-center gap-3 text-rewayLightGrey">
          <Store className="size-3" />
          <p className="font-ptSans text-[12px] leading-[15.53px] uppercase font-normal">{brand}</p>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 px-4">
        <div className="w-full space-y-3 pl-6">
          <ProductDetailsMetadata product={product} />
        </div>

        <Separator className="w-full" />

        <div className="w-full flex flex-col gap-2 pl-6">
          <ProductDetailsList product={product} />
        </div>
      </CardContent>

      <CardFooter className="flex justify-end w-full pt-0 pb-4 px-4">
        <ProductDetailsPricing product={product} />
      </CardFooter>
    </Card>
  );
}
