import { Product } from "@/lib/types/shop-schemas";
import { Dot } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export default function ProductDetailsList({ product }: ProductCardProps) {
  return (
    <>
      <h5 className="font-ptSans text-[12px] leading-[15.53px] text-rewayDarkGrey uppercase">Product Details</h5>
      <ul className="w-full flex flex-col gap-1">
        {product.metadata.details.map((detail, index) => (
          <li key={index} className="flex items-center text-rewayDarkGrey">
            <Dot className="-ml-1 text-lg size-4" />
            <p className="font-ptSans text-[14px] leading-[18.12px]">{detail.toString()}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
