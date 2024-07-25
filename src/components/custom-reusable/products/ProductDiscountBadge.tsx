"use client";

import { useMemo } from "react";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Product } from "@/lib/types/types-and-schemas";
import { cn, formatToPercentage, getProductPercentageOff } from "@/lib/utils";
import { Tag } from "lucide-react";

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
