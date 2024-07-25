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

// Record for human-readable names
export const ColourDisplayName: Record<ColourEnum, string> = {
  [ColourEnum.Brown]: "Brown",
  [ColourEnum.Tan]: "Tan",
  [ColourEnum.DarkBrown]: "Dark Brown",
  [ColourEnum.Black]: "Black",
  [ColourEnum.White]: "White",
  [ColourEnum.Red]: "Red",
  [ColourEnum.Blue]: "Blue",
  [ColourEnum.Green]: "Green",
};

// Record for tailwind CSS classes
const productColours: Record<ColourEnum, string> = {
  [ColourEnum.Brown]: "bg-neutral-500",
  [ColourEnum.Tan]: "bg-stone-400",
  [ColourEnum.DarkBrown]: "bg-stone-600",
  [ColourEnum.Black]: "bg-black",
  [ColourEnum.White]: "bg-white",
  [ColourEnum.Red]: "bg-red-500",
  [ColourEnum.Blue]: "bg-blue-500",
  [ColourEnum.Green]: "bg-green-500",
};

// Helper function to get the colour class
export function getProductColor(colour: ColourEnum): string {
  return productColours[colour];
}
