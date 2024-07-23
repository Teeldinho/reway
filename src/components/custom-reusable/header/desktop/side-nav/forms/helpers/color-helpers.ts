const productColors = {
  brown: "text-neutral-700",
  tan: "text-stone-500",
  darkBrown: "text-stone-800",
} as const;

export enum ColorEnum {
  Brown = "Brown",
  Tan = "Tan",
  DarkBrown = "Dark Brown",
}

export function getColorProductColor(color: ColorEnum): string {
  return productColors[color.toLowerCase() as keyof typeof productColors];
}
