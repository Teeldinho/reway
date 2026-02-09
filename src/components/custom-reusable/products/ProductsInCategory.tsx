import { dummyProductsData } from "@/lib/dummy-data";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { CollectionDisplayName, CollectionsEnum, generateSlug } from "@/lib/types/product-helpers";
import { Product } from "@/lib/types/shop-schemas";

type ProductsInCategoryProps = {
  product: Product;
};

export default function ProductsInCategory({ product }: ProductsInCategoryProps) {
  const filteredProducts = dummyProductsData
    .filter((p) => p.id !== product.id)
    .filter((p) => p.categories.some((category: string) => product.categories.includes(category)));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <Link
          prefetch={false}
          href={`/${generateSlug(CollectionDisplayName[product.collection as CollectionsEnum])}/${generateSlug(product.name)}`}
          key={product.id}
        >
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}
