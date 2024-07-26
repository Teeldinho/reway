import NotFound from "@/components/custom-reusable/NotFound";
import ProductDetailsPage from "@/components/custom-reusable/products/ProductDetailsPage";
import { buttonVariants } from "@/components/ui/button";
import { dummyProductsData } from "@/lib/dummy-data";
import { generateSlug } from "@/lib/types/product-helpers";
import Link from "next/link";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = dummyProductsData.find((product) => generateSlug(product.name) === params.slug);

  if (!product) {
    return (
      <NotFound title="Product not found." message="The product you are looking for is not available.">
        <Link href="/equipment" className={buttonVariants({ variant: "default" })}>
          Go back to Equipment Collection
        </Link>
      </NotFound>
    );
  }

  return <ProductDetailsPage product={product} />;
}
