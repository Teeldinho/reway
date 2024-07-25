import ProductCard from "@/components/custom-reusable/products/ProductCard";
import ProductDetailsInfo from "@/components/custom-reusable/products/ProductDetailsInfo";
import ProductOptions from "@/components/custom-reusable/products/ProductOptions";
import { dummyProductsData } from "@/lib/dummy-data";

export default function Home() {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {dummyProductsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {/* <ProductDetailsInfo product={dummyProductsData[3]} /> */}

      {/* <ProductOptions product={dummyProductsData[7]} /> */}
    </div>
  );
}
