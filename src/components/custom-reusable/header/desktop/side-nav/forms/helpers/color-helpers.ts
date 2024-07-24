export enum ColourEnum {
  Brown = "Brown",
  Tan = "Tan",
  DarkBrown = "Beige",
  Black = "Black",
  White = "White",
  Red = "Red",
  Blue = "Blue",
  Green = "Green",
}

const productColours = {
  brown: "bg-neutral-700",
  tan: "bg-stone-400",
  beige: "bg-stone-200",
  black: "bg-black",
  white: "bg-white",
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
} as const;

export function getProductColor(colour: ColourEnum): string {
  const key = colour.toLowerCase().replace(/ /g, "");
  return productColours[key as keyof typeof productColours];
}
