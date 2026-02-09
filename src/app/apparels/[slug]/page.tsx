import ProductDetailsPage from "@/components/custom-reusable/products/ProductDetailsPage";
import { dummyProductsData } from "@/lib/dummy-data";
import { CollectionsEnum, generateSlug, getProductBySlug } from "@/lib/types/product-helpers";
import { notFound } from "next/navigation";

const collectionId = CollectionsEnum.APPARELS;

const collectionProducts = dummyProductsData.filter((product) => product.collection === collectionId);

export const dynamicParams = false;

export function generateStaticParams() {
  return collectionProducts.map((product) => ({
    slug: generateSlug(product.name),
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(collectionProducts, params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailsPage product={product} />;
}
