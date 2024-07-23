import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Brand, Product } from "@/lib/types/types-and-schemas";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatToRand = (value: number) => {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatToPercentage = (value: number) => {
  return new Intl.NumberFormat("en-ZA", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value / 100);
};

export const getProductsForCategories = (products: Product[], category: string[]) =>
  products.filter((product) => product.categories.some((productCategory) => category.includes(productCategory)));

export const getProductsForBrand = (products: Product[], brandId: string) => products.filter((product) => product.metadata.brandId === brandId);

export const getBrandForProduct = (brands: Brand[], productBrandId: string) =>
  brands.find((brand) => brand.id === productBrandId)?.name || "Unknown Brand";

export const getProductPercentageOff = (product: Product) => ((product.price - product.priceAfterDiscount) / product.price) * 100;

export const getProductHasLowStock = (product: Product) => product.stockRemaining < 5;
