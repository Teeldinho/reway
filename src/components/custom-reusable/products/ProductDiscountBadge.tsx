"use client";

import { useMemo } from "react";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn, formatToPercentage } from "@/lib/utils";
import { Tag } from "lucide-react";
import { getProductPercentageOff } from "@/lib/types/product-helpers";
import { Product } from "@/lib/types/shop-schemas";

type ProductDiscountBadgeProps = BadgeProps & {
  product: Product;
  badgeSize?: "small" | "large";
  className?: string;
};

export default function ProductDiscountBadge({ product, badgeSize = "large", className }: ProductDiscountBadgeProps) {
  const percentageOff = useMemo(() => getProductPercentageOff(product), [product]);
  return (
    <Badge
      className={cn(
        "flex items-center gap-2 text-[16px] leading-[20.7px] text-white max-w-fit",
        {
          hidden: percentageOff <= 0,
        },
        className
      )}
    >
      <Tag
        className={cn("size-5", {
          "size-3": badgeSize === "small",
        })}
      />
      <span className="italic font-bold">{`-${formatToPercentage(percentageOff)} off`}</span>
    </Badge>
  );
}
