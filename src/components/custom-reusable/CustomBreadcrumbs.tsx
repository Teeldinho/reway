"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { CollectionDisplayName, generateSlug } from "@/lib/types/product-helpers";
import { dummyProductsData } from "@/lib/dummy-data";
import { ChevronRight } from "lucide-react";

export default function CustomBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment);

  const collectionSegment = segments[0];
  const productSegment = segments[1];

  const collectionName = Object.values(CollectionDisplayName).find((name) => generateSlug(name) === collectionSegment);

  const product = dummyProductsData.find((product) => generateSlug(product.name) === productSegment);

  return (
    <Breadcrumb className="font-ptSans text-base">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-primary">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="size-5">
          <ChevronRight className="min-w-full min-h-full text-rewayGrey" />
        </BreadcrumbSeparator>

        {collectionName && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${collectionSegment}`} className="text-primary">
                {collectionName}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="size-5">
              <ChevronRight className="min-w-full min-h-full text-rewayGrey" />
            </BreadcrumbSeparator>
          </>
        )}
        {product && (
          <BreadcrumbItem>
            <BreadcrumbPage className="text-rewayGrey">{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
