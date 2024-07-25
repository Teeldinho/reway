import { useMemo } from "react";
import { dummyBrandsData } from "@/lib/dummy-data";
import { Product } from "@/lib/types/types-and-schemas";
import { cn } from "@/lib/utils";
import { getBrandForProduct } from "@/lib/types/product-helpers";
import { ColourDisplayName, getProductColor } from "@/lib/types/colour-helpers";

type ProductCardProps = {
  product: Product;
};

export default function ProductDetailsMetadata({ product }: ProductCardProps) {
  const brand = useMemo(() => getBrandForProduct(dummyBrandsData, product.metadata.brandId), [product]);
  const productColor = useMemo(() => getProductColor(product.metadata.colour), [product]);

  return (
    <ul className="w-full">
      <li className="w-full flex gap-4 text-[16px] leading-[20.7px]">
        <h6 className="font-ptSans text-rewayGrey capitalize max-w-fit min-w-[30%]" style={{ width: "150px" }}>
          Fabrication
        </h6>
        <p className="font-ptSans text-black capitalize font-bold">{product.metadata.fabrication}</p>
      </li>

      <li className="w-full flex gap-4 text-[16px] leading-[20.7px]">
        <h6 className="font-ptSans text-rewayGrey capitalize max-w-fit min-w-[30%]" style={{ width: "150px" }}>
          Colour
        </h6>
        <span className="flex items-center gap-2">
          <span className={cn(`size-[10px] rounded-full ring-2 ring-black`, productColor ? productColor : "bg-transparent")} />

          <p className="font-ptSans text-black capitalize font-bold">{ColourDisplayName[product.metadata.colour]}</p>
        </span>
      </li>

      <li className="w-full flex gap-4 text-[16px] leading-[20.7px]">
        <h6 className="font-ptSans text-rewayGrey capitalize max-w-fit min-w-[30%]" style={{ width: "150px" }}>
          Brand
        </h6>
        <p className="font-ptSans text-black capitalize font-bold">{brand}</p>
      </li>
    </ul>
  );
}
