import { Brand, Category, Product } from "@/lib/types/types-and-schemas";

export enum CollectionsEnum {
  APPARELS = "Apparels",
  SHOES = "Shoes",
  EQUIPMENT = "Equipment",
  GIFT = "Gift",
}

// Record for human-readable names
export const CollectionDisplayName: Record<CollectionsEnum, string> = {
  [CollectionsEnum.APPARELS]: "Apparels",
  [CollectionsEnum.SHOES]: "Shoes",
  [CollectionsEnum.EQUIPMENT]: "Equipment",
  [CollectionsEnum.GIFT]: "Gift",
};

// Record for slugs
export const CollectionSlug: Record<CollectionsEnum, string> = {
  [CollectionsEnum.APPARELS]: generateSlug(CollectionsEnum.APPARELS),
  [CollectionsEnum.SHOES]: generateSlug(CollectionsEnum.SHOES),
  [CollectionsEnum.EQUIPMENT]: generateSlug(CollectionsEnum.EQUIPMENT),
  [CollectionsEnum.GIFT]: generateSlug(CollectionsEnum.GIFT),
};

// Helper function to generate slug
export function generateSlug(name: string): string {
  return name.toLowerCase().replace(/ /g, "-");
}

export const getProductsForCategories = (products: Product[], category: string[]) =>
  products.filter((product) => product.categories.some((productCategory) => category.includes(productCategory)));

export const getProductsForBrand = (products: Product[], brandId: string) => products.filter((product) => product.metadata.brandId === brandId);

export const getBrandForProduct = (brands: Brand[], productBrandId: string) =>
  brands.find((brand) => brand.id === productBrandId)?.name || "Unknown Brand";

export const getProductPercentageOff = (product: Product) => ((product.price - product.priceAfterDiscount) / product.price) * 100;

export const getProductHasLowStock = (product: Product) => product.stockRemaining < 5;

export function getCategoryById(categories: Category[], id: string) {
  return categories.find((category) => category.id === id);
}

export function getProductsInSameCategory(product: Product, allProducts: Product[]) {
  return allProducts.filter((p) => p.id !== product.id).filter((p) => p.categories.some((category) => product.categories.includes(category)));
}
