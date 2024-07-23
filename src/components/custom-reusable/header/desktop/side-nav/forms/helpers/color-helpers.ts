export enum ColourEnum {
  Brown = "Brown",
  Tan = "Tan",
  DarkBrown = "Dark Brown",
  Black = "Black",
  White = "White",
  Red = "Red",
  Blue = "Blue",
  Green = "Green",
}

const productColours = {
  brown: "text-neutral-700",
  tan: "text-stone-500",
  darkBrown: "text-stone-800",
  black: "text-black",
  white: "text-white",
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
} as const;

export function getProductColor(colour: ColourEnum): string {
  return productColours[colour.toLowerCase().replace(" ", "") as keyof typeof productColours];
}
