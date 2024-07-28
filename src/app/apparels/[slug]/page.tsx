import NotFound from "@/components/custom-reusable/NotFound";
import ProductDetailsPage from "@/components/custom-reusable/products/ProductDetailsPage";
import { buttonVariants } from "@/components/ui/button";
import { dummyProductsData } from "@/lib/dummy-data";
import { CollectionSlug, CollectionsEnum, getProductBySlug } from "@/lib/types/product-helpers";
import Link from "next/link";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(dummyProductsData, params.slug);

  if (!product) {
    return (
      <NotFound title="Product not found." message="The product you are looking for is not available.">
        <Link href={CollectionSlug[CollectionsEnum.APPARELS]} className={buttonVariants({ variant: "default" })}>
          Go back to Apparels Collection
        </Link>
      </NotFound>
    );
  }

  return <ProductDetailsPage product={product} />;
}
