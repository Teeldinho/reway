"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/lib/types/types-and-schemas";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { formatToRand } from "@/lib/utils";
import { dummyBrandsData } from "@/lib/dummy-data";
import StoreIcon from "@/components/custom-reusable/icons/StoreIcon";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ProductDiscountBadge from "@/components/custom-reusable/products/ProductDiscountBadge";
import ProductLowStockBadge from "@/components/custom-reusable/products/ProductLowStockBadge";
import { Suspense } from "react";
import { getBrandForProduct } from "@/lib/types/product-helpers";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="border-4 border-transparent hover:border-primary w-full max-w-[400px] group hover:cursor-pointer transition-all duration-500 *:transition-all *:duration-500 flex flex-col">
      <CardHeader className="bg-rewayLightGrey w-full p-0 ring-rewayLightGrey relative">
        <AspectRatio ratio={16 / 10} className="relative h-full overflow-hidden">
          <Image
            src={product.images[0]}
            alt={`${product.name}-image`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </AspectRatio>

        {/* This simulates a suspense fallback for the ProductDiscountBadge component, */}
        {/* That aims to show a message while the discount is being calculated, in case we need data from backend or there is an expensive computation. */}
        <Suspense fallback={<p className="text-sm">Calculating discount...</p>}>
          <ProductDiscountBadge product={product} className="absolute right-2 top-1" />
        </Suspense>

        {/* Similarly, this suspense fallback simulates a loading state for the ProductLowStockBadge component. */}
        <Suspense fallback={<p className="text-sm">Calculating stock remaining...</p>}>
          <ProductLowStockBadge product={product} className="absolute left-2 bottom-2" />
        </Suspense>
      </CardHeader>

      <div className="group-hover:bg-rewayLightGrey">
        <CardContent className="pb-[6px] pt-4 px-4 flex flex-col gap-3">
          <CardTitle className="font-suezOne text-[18px] leading-[23.51px] uppercase group-hover:text-primary line-clamp-2 transition-all duration-300 text-black">
            {product.name}
          </CardTitle>
          <CardDescription className="font-ptSans font-bold flex items-center gap-2 text-rewayGrey">
            <div className="size-6">
              <StoreIcon className="w-full h-full fill-rewayGrey" />
            </div>

            {/* Similarly, this suspense fallback simulates a loading state for the brand name. */}
            <Suspense fallback={<p className="text-sm">Determining brand...</p>}>
              <p>{getBrandForProduct(dummyBrandsData, product.metadata.brandId)}</p>
            </Suspense>
          </CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between items-center px-4 pb-1 pt-0">
          {/* Similarly, this suspense fallback simulates a loading state for the price. */}
          <Suspense fallback={<p className="text-sm">Calculating price...</p>}>
            <h4 className="font-suezOne text-primary text-[20px] leading-[26.12px]">{formatToRand(product.price)}</h4>
          </Suspense>

          <Button
            variant={"link"}
            className="font-ptSans font-semibold flex gap-4 items-center group-hover:text-primary text-rewayGrey hover:text-primary capitalize pr-0 text-[14px] leading-[18.2px *:transition-all *:duration-300"
          >
            View
            <ArrowRightIcon className="w-[13px] h-[12px] fill-rewayGrey group-hover:fill-primary group-hover:-rotate-45" />
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
