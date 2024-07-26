import { dummyProductsData } from "@/lib/dummy-data";
import { Product } from "@/lib/types/types-and-schemas";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { CollectionDisplayName, generateSlug } from "@/lib/types/product-helpers";

type ProductsInCategoryProps = {
  product: Product;
};

export default function ProductsInCategory({ product }: ProductsInCategoryProps) {
  const filteredProducts = dummyProductsData
    .filter((p) => p.id !== product.id)
    .filter((p) => p.categories.some((category) => product.categories.includes(category)));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <Link href={`/${generateSlug(CollectionDisplayName[product.collection])}/${generateSlug(product.name)}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}
