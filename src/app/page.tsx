import ProductCard from "@/components/custom-reusable/products/ProductCard";
import { dummyProductsData } from "@/lib/dummy-data";

export default function Home() {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {dummyProductsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
