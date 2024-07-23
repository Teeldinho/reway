"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/lib/types/types-and-schemas";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { cn, formatToPercentage, formatToRand, getBrandForProduct, getProductHasLowStock, getProductPercentageOff } from "@/lib/utils";
import { dummyBrandsData } from "@/lib/dummy-data";
import StoreIcon from "../icons/StoreIcon";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useMemo } from "react";
import { Tag } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const percentageOff = useMemo(() => getProductPercentageOff(product), [product]);
  const hasLowStock = useMemo(() => getProductHasLowStock(product), [product]);

  return (
    <Card className="w-full max-w-[300px] group hover:cursor-pointer *:transition-all *:duration-500 border-none flex flex-col">
      <CardHeader className="bg-rewayLightGrey w-full p-0 ring-rewayLightGrey relative">
        <AspectRatio ratio={16 / 10} className="relative h-full">
          <Image src={product.images[0]} alt={`${product.name}-image`} fill className="object-cover" />
        </AspectRatio>

        <Badge
          className={cn("absolute right-2 top-1 flex items-center gap-2", {
            hidden: percentageOff <= 0,
          })}
        >
          <Tag className="size-5 text-white" />
          <p className="italic text-[16px] leading-[20.7px] font-bold">{`-${formatToPercentage(percentageOff)} off`}</p>
        </Badge>

        <Badge
          variant={"secondary"}
          className={cn("absolute left-2 bottom-2 flex items-center gap-2 bg-black opacity-50", hasLowStock ? "visible" : "hidden")}
        >
          <p className="italic text-[16px] leading-[20.7px] font-bold uppercase text-white">Low Stock</p>
        </Badge>
      </CardHeader>

      <div className="border-4 border-transparent group-hover:border-primary border-t-0 group-hover:bg-rewayLightGrey">
        <CardContent className="pb-[6px] pt-4 px-4 flex flex-col gap-3">
          <CardTitle className="font-suezOne text-[18px] leading-[23.51px] uppercase group-hover:text-primary line-clamp-2 transition-all duration-300 text-black">
            {product.name}
          </CardTitle>
          <CardDescription className="font-ptSans font-bold flex items-center gap-2 text-rewayGrey">
            <div className="size-6">
              <StoreIcon className="w-full h-full fill-rewayGrey" />
            </div>
            <p>{getBrandForProduct(dummyBrandsData, product.metadata.brandId)}</p>
          </CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between items-center px-4 pb-1 pt-0">
          <h4 className="font-suezOne text-primary text-[20px] leading-[26.12px]">{formatToRand(product.price)}</h4>

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
