import { Card, CardContent } from "@/components/ui/card";
import ProductOptionsForm from "./forms/ProductOptionsForm";
import { Product } from "@/lib/types/shop-schemas";

type ProductCardProps = {
  product: Product;
};

export default function ProductOptions({ product }: ProductCardProps) {
  return (
    <Card className="max-w-[355px] min-w-full pt-4 bg-rewayLightGrey">
      <CardContent className="flex flex-col gap-4">
        <ProductOptionsForm product={product} />
      </CardContent>
    </Card>
  );
}
