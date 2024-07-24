import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/types/types-and-schemas";
import { cn, formatToPercentage, formatToRand, getProductPercentageOff } from "@/lib/utils";
import { Tag } from "lucide-react";
import { useMemo } from "react";

type ProductCardProps = {
  product: Product;
};

export default function ProductDetailsPricing({ product }: ProductCardProps) {
  const percentageOff = useMemo(() => getProductPercentageOff(product), [product]);
  const price = product.price;
  const priceAfterDiscount = product.priceAfterDiscount;
  const isDiscounted = priceAfterDiscount < price;

  return (
    <div className="flex items-center max-w-fit gap-5">
      <Badge
        className={cn("flex items-center gap-2", {
          hidden: percentageOff <= 0,
        })}
      >
        <Tag className="size-5 text-white" />
        <span className="italic text-[16px] leading-[20.7px] font-bold">{`-${formatToPercentage(percentageOff)} off`}</span>
      </Badge>

      <div className="relative">
        <h4 className="font-suezOne text-[30px] leading-[39.18px] text-black">
          {isDiscounted ? formatToRand(priceAfterDiscount) : formatToRand(price)}
        </h4>
        {isDiscounted && (
          <p className="absolute -top-3 right-0 font-suezOne text-rewayGrey text-[14px] leading-[18.28px] line-through">{formatToRand(price)}</p>
        )}
      </div>
    </div>
  );
}
