"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Fragment, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ProductPreviewThumbnail from "./ProductPreviewThumbnail";
import ProductPreviewEnlargedImage from "./ProductPreviewEnlargedImage";
import { Product } from "@/lib/types/shop-schemas";
import ProductDiscountBadge from "@/components/custom-reusable/products/ProductDiscountBadge";
import ProductLowStockBadge from "@/components/custom-reusable/products/ProductLowStockBadge";

type ProductCardProps = {
  product: Product;
};

export default function ProductPreview({ product }: ProductCardProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Dialog>
      <div className="flex flex-col gap-4 w-full min-w-full">
        <Carousel
          setApi={setApi}
          className="min-w-full relative"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {product.images.map((p, index) => (
              <Fragment key={index}>
                <DialogTrigger asChild>
                  <CarouselItem className="group hover:cursor-zoom-in">
                    <Card className="min-w-full overflow-hidden bg-rewayLightGrey">
                      <CardContent className="p-0">
                        <AspectRatio ratio={16 / 12} className="relative h-full overflow-hidden">
                          <Image
                            src={p}
                            alt={`${product.name}-image`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </AspectRatio>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </DialogTrigger>
              </Fragment>
            ))}
          </CarouselContent>

          <ProductDiscountBadge product={product} className="absolute top-4 right-4" />
          <ProductLowStockBadge product={product} className="absolute bottom-4 left-4" />

          <CarouselPrevious className="absolute left-4 top-[50%] bottom-[50%] border-none bg-primary ring-2 ring-white text-white hover:bg-primary/70" />
          <CarouselNext className="absolute right-4 top-[50%] bottom-[50%] border-none bg-primary ring-2 ring-white text-white hover:bg-primary/70" />
        </Carousel>

        <div className="w-full grid grid-cols-4 gap-3 md:gap-4">
          {product.images.map((p, index) => (
            <ProductPreviewThumbnail
              key={index}
              selected={index + 1 === current}
              index={index}
              onThumbClick={() => api?.scrollTo(index)}
              product={product}
            />
          ))}
        </div>
      </div>
      <DialogContent className="bg-rewayLightGrey w-full md:min-w-[50vw] md:min-h-[80vh] p-0">
        <ProductPreviewEnlargedImage imageUrl={product.images[current - 1]} />
      </DialogContent>
    </Dialog>
  );
}
