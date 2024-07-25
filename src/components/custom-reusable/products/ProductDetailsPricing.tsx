import { Product } from "@/lib/types/types-and-schemas";
import { formatToRand } from "@/lib/utils";
import ProductDiscountBadge from "./ProductDiscountBadge";

type ProductCardProps = {
  product: Product;
};

export default function ProductDetailsPricing({ product }: ProductCardProps) {
  const price = product.price;
  const priceAfterDiscount = product.priceAfterDiscount;
  const isDiscounted = priceAfterDiscount < price;

  return (
    <div className="flex items-center max-w-fit gap-5">
      <ProductDiscountBadge product={product} />

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
