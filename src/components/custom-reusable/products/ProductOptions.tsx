import { Product } from "@/lib/types/types-and-schemas";
import { Card, CardContent } from "@/components/ui/card";
import ProductOptionsForm from "./forms/ProductOptionsForm";

type ProductCardProps = {
  product: Product;
};

export default function ProductOptions({ product }: ProductCardProps) {
  return (
    <Card className="max-w-[355px] md:min-w-[355px] w-full pt-4 bg-rewayLightGrey">
      <CardContent className="flex flex-col gap-4">
        <ProductOptionsForm product={product} />
      </CardContent>
    </Card>
  );
}
