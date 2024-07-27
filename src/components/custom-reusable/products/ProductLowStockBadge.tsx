"use client";

import { useMemo } from "react";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Tag } from "lucide-react";
import { getProductHasLowStock } from "@/lib/types/product-helpers";
import { Product } from "@/lib/types/shop-schemas";

type ProductLowStockBadgeProps = BadgeProps & {
  product: Product;
  badgeSize?: "small" | "large";
  className?: string;
};

export default function ProductLowStockBadge({ product, badgeSize = "large", className }: ProductLowStockBadgeProps) {
  const hasLowStock = useMemo(() => getProductHasLowStock(product), [product]);
  return (
    <Badge
      className={cn(
        "flex items-center gap-2 text-[16px] leading-[20.7px] text-white bg-black opacity-50 max-w-fit",
        hasLowStock ? "visible" : "hidden",
        className
      )}
    >
      <Tag
        className={cn("size-5", {
          "size-3": badgeSize === "small",
        })}
      />
      <p className="italic font-bold uppercase">Low Stock</p>
    </Badge>
  );
}
