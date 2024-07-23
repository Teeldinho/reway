import ProductCard from "@/components/custom-reusable/products/ProductCard";
import { dummyProductsData } from "@/lib/dummy-data";

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <ProductCard product={dummyProductsData[11]} />
    </div>
  );
}
