import { Product } from "@/lib/types/types-and-schemas";
import ProductPreview from "@/components/custom-reusable/products/ProductPreview";
import ProductDetailsInfoCard from "./ProductDetailsInfo";
import ProductOptions from "./ProductOptions";
import { getCategoryById, getProductsInSameCategory } from "@/lib/types/product-helpers";
import { dummyCategoriesData, dummyProductsData } from "@/lib/dummy-data";
import { Separator } from "@/components/ui/separator";
import ProductsInCategory from "./ProductsInCategory";

type ProductDetailsInfoCardProps = {
  product: Product;
};

export default function ProductDetailsPage({ product }: ProductDetailsInfoCardProps) {
  const relatedProductsToBeShown = getProductsInSameCategory(product, dummyProductsData).length > 0;

  return (
    <div className="flex flex-col gap-20 pb-16">
      {/* Product Details Section */}
      <section className="w-full flex flex-col md:flex-row gap-8">
        {/* Product Images Carousel */}
        <div className="w-full md:w-[50%] lg:w-[65%] p-1">
          <ProductPreview product={product} />
        </div>

        {/* Product Details and Option Configurator */}
        <div className="flex flex-col gap-4 w-full md:w-[50%] lg:w-[35%]">
          <ProductDetailsInfoCard product={product} />
          <ProductOptions product={product} />
        </div>
      </section>

      {/* Related Category Section  */}
      {relatedProductsToBeShown && (
        <section className="w-full flex flex-col gap-8">
          <span className="flex items-center gap-4">
            <span className="text-xl leading-[26.12px] font-suezOne uppercase text-rewayBlack flex items-center gap-1">
              <h2>More from</h2>
              <h2 className="text-primary">{getCategoryById(dummyCategoriesData, product.categories[0])?.name}</h2>
            </span>

            <Separator className="flex-1 bg-rewayGrey h-[2px] rounded" />
          </span>

          <ProductsInCategory product={product} />
        </section>
      )}
    </div>
  );
}
