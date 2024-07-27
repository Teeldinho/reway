"use client";

import { MouseEventHandler } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/types/shop-schemas";

type ProductPreviewThumbnailProps = {
  selected: boolean;
  index: number;
  onThumbClick: MouseEventHandler<HTMLDivElement>;
  product: Product;
};

export default function ProductPreviewThumbnail({ selected, index, onThumbClick, product }: ProductPreviewThumbnailProps) {
  return (
    <Card
      className={cn("w-full h-full overflow-hidden bg-rewayLightGrey hover:cursor-pointer group relative", {
        "ring-2 ring-primary bg-primary/10": selected,
      })}
      onClick={onThumbClick}
    >
      <CardContent className="p-0">
        <AspectRatio ratio={1 / 1} className="relative h-full overflow-hidden">
          <Image
            src={product.images[index]}
            alt={`${product.name}-image`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </AspectRatio>
      </CardContent>

      <div className="absolute top-1 right-1 z-20">
        <div className="bg-rewayLightGrey text-rewayGrey/50 font-semibold text-[10px] px-2 py-1 rounded-full">{index + 1}</div>
      </div>

      {selected && <div className="absolute min-w-full min-h-full bg-primary/10 bottom-0 left-0 z-10" />}
    </Card>
  );
}
