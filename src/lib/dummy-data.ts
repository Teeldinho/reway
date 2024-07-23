import { ColourEnum } from "@/components/custom-reusable/header/desktop/side-nav/forms/helpers/color-helpers";
import { Brand, Product } from "@/lib/types/types-and-schemas";

import MainItem1 from "../../public/assets/Main item Image 01.png";
import MainItem2 from "../../public/assets/Main item Image 02.png";
import MainItem3 from "../../public/assets/Main item Image 03.png";
import MainItem4 from "../../public/assets/Main item Image 04.png";
import MainItem5 from "../../public/assets/Main item Image 05.png";

import Boots01 from "../../public/assets/Boots 01.png";
import Boots02 from "../../public/assets/Boots 02.png";
import Boots03 from "../../public/assets/Boots 03.png";
import Boots04 from "../../public/assets/Boots 04.png";
import Boots05 from "../../public/assets/Boots 05.png";

import Linen01 from "../../public/assets/linen-2.jpg";
import Linen02 from "../../public/assets/linen-1.jpg";
import Linen03 from "../../public/assets/linen-3.jpg";
import Linen04 from "../../public/assets/linen-4.jpg";
import Linen05 from "../../public/assets/linen-2.jpg";

import Joggers01 from "../../public/assets/joggers-1.jpg";
import Joggers02 from "../../public/assets/joggers-2.jpg";
import Joggers03 from "../../public/assets/joggers-3.jpg";
import Joggers04 from "../../public/assets/joggers-4.jpg";
import Joggers05 from "../../public/assets/joggers-1.jpg";

import Pole01 from "../../public/assets/pole-1.jpg";
import Pole02 from "../../public/assets/pole-2.jpg";
import Pole03 from "../../public/assets/pole-3.jpg";
import Pole04 from "../../public/assets/pole-4.jpg";
import Pole05 from "../../public/assets/pole-5.jpg";

import Gift01 from "../../public/assets/gift-1.jpg";
import Gift02 from "../../public/assets/gift-2.jpg";
import Gift03 from "../../public/assets/gift-3.jpg";
import Gift04 from "../../public/assets/gift-4.jpg";
import Gift05 from "../../public/assets/gift-5.jpg";

import Stove01 from "../../public/assets/stove-1.jpg";
import Stove02 from "../../public/assets/stove-2.jpg";
import Stove03 from "../../public/assets/stove-3.jpg";
import Stove04 from "../../public/assets/stove-4.jpg";
import Stove05 from "../../public/assets/stove-5.jpg";

import Beauty01 from "../../public/assets/beauty-1.jpg";
import Beauty02 from "../../public/assets/beauty-2.jpg";
import Beauty03 from "../../public/assets/beauty-3.jpg";
import Beauty04 from "../../public/assets/beauty-4.jpg";
import Beauty05 from "../../public/assets/beauty-5.jpg";

export const dummyBrandsData: Brand[] = [
  {
    id: "1",
    name: "Superbalist",
    description: "Description for Superbalist brand.",
  },
  {
    id: "2",
    name: "Mango",
    description: "Description for Mango brand.",
  },
  {
    id: "3",
    name: "Old Khakhi",
    description: "Description for Old Khakhi brand.",
  },
  {
    id: "4",
    name: "Jack and Jones",
    description: "Description for Jack and Jones brand.",
  },
];

export const dummyProductsData: Product[] = [
  {
    id: "1",
    name: "Hargrave Ankle Boot",
    price: 500,
    priceAfterDiscount: 300,
    stockRemaining: 5,
    images: [MainItem1.src, MainItem2.src, MainItem3.src, MainItem4.src, MainItem5.src],
    metadata: {
      fabrication: "Leather",
      colour: ColourEnum.Brown,
      brandId: "1",
      details: ["Ankle boot", "Lace-up design", "Leather upper", "Rubber sole"],
    },
    sizes: ["7", "8", "9", "10", "11"],
    categories: ["Shoes"],
  },
  {
    id: "2",
    name: "Cameron Leather Boot",
    price: 800,
    priceAfterDiscount: 600,
    stockRemaining: 12,
    images: [Boots01.src, MainItem2.src, MainItem3.src, MainItem4.src, MainItem5.src],
    metadata: {
      fabrication: "Leather",
      colour: ColourEnum.Black,
      brandId: "2",
      details: ["Premium leather", "Lace-up design", "Comfort sole"],
    },
    sizes: ["7", "8", "9", "10", "11", "12"],
    categories: ["Shoes"],
  },
  {
    id: "3",
    name: "Grayson Brogue",
    price: 750,
    priceAfterDiscount: 500,
    stockRemaining: 4,
    images: [Boots02.src, MainItem3.src, MainItem5.src, MainItem2.src, MainItem1.src],
    metadata: {
      fabrication: "Leather",
      colour: ColourEnum.Tan,
      brandId: "3",
      details: ["Brogue design", "Wingtip", "Leather upper", "Rubber sole"],
    },
    sizes: ["7", "8", "9", "10", "11"],
    categories: ["Shoes"],
  },
  {
    id: "4",
    name: "Orca Hiking Boot",
    price: 900,
    priceAfterDiscount: 900,
    stockRemaining: 10,
    images: [Boots03.src, MainItem4.src, MainItem3.src, MainItem1.src, MainItem5.src],
    metadata: {
      fabrication: "Leather",
      colour: ColourEnum.Green,
      brandId: "4",
      details: ["Waterproof", "Lace-up design", "Rubber sole"],
    },
    sizes: ["7", "8", "9", "10", "11", "12"],
    categories: ["Shoes"],
  },
  {
    id: "5",
    name: "Jean Hiker Boots",
    price: 850,
    priceAfterDiscount: 650,
    stockRemaining: 4,
    images: [Boots04.src, MainItem1.src, MainItem3.src, MainItem4.src, MainItem1.src],
    metadata: {
      fabrication: "Leather",
      colour: ColourEnum.DarkBrown,
      brandId: "1",
      details: ["Hiking boot", "Ankle support", "Rubber sole"],
    },
    sizes: ["7", "8", "9", "10", "11"],
    categories: ["Shoes"],
  },
  {
    id: "6",
    name: "Dylan Hiker Boot",
    price: 950,
    priceAfterDiscount: 950,
    stockRemaining: 9,
    images: [Boots05.src, MainItem2.src, MainItem3.src, MainItem4.src, MainItem5.src],
    metadata: {
      fabrication: "Faux Leather",
      colour: ColourEnum.Brown,
      brandId: "1",
      details: ["Hiking boot", "Speed laces", "Lace-up design", "Rubber sole"],
    },
    sizes: ["7", "8", "9", "10", "11"],
    categories: ["Shoes"],
  },
  {
    id: "7",
    name: "Linen Summer Cloth",
    price: 400,
    priceAfterDiscount: 400,
    stockRemaining: 3,
    images: [Linen01.src, Linen02.src, Linen03.src, Linen04.src, Linen05.src],
    metadata: {
      fabrication: "Linen",
      colour: ColourEnum.White,
      brandId: "2",
      details: ["Comfort fit", "Breathable material"],
    },
    sizes: ["S", "M", "L", "XL"],
    categories: ["Apparels"],
  },
  {
    id: "8",
    name: "Polyester Joggers",
    price: 350,
    priceAfterDiscount: 250,
    stockRemaining: 20,
    images: [Joggers01.src, Joggers02.src, Joggers03.src, Joggers04.src, Joggers05.src],
    metadata: {
      fabrication: "Polyester",
      colour: ColourEnum.Red,
      brandId: "3",
      details: ["Slim fit", "Lightweight"],
    },
    sizes: ["S", "M", "L", "XL"],
    categories: ["Apparels"],
  },
  {
    id: "9",
    name: "All-Terrain Hiking Poles",
    price: 600,
    priceAfterDiscount: 600,
    stockRemaining: 18,
    images: [Pole01.src, Pole02.src, Pole03.src, Pole04.src, Pole05.src],
    metadata: {
      fabrication: "Metal",
      colour: ColourEnum.Blue,
      brandId: "4",
      details: ["Durable", "Lightweight"],
    },
    sizes: ["One Size"],
    categories: ["Equipment"],
  },
  {
    id: "10",
    name: "Compact Camping Stove",
    price: 500,
    priceAfterDiscount: 350,
    stockRemaining: 25,
    images: [Stove01.src, Stove02.src, Stove03.src, Stove04.src, Stove05.src],
    metadata: {
      fabrication: "Stainless Steel",
      colour: ColourEnum.Black,
      brandId: "1",
      details: ["Portable", "Easy to use"],
    },
    sizes: ["One Size"],
    categories: ["Equipment"],
  },
  {
    id: "11",
    name: "Holiday Gift Set",
    price: 200,
    priceAfterDiscount: 150,
    stockRemaining: 30,
    images: [Gift01.src, Gift02.src, Gift03.src, Gift04.src, Gift05.src],
    metadata: {
      fabrication: "Various",
      colour: ColourEnum.Red,
      brandId: "2",
      details: ["Assorted items", "Festive packaging"],
    },
    sizes: ["One Size"],
    categories: ["Gift"],
  },
  {
    id: "12",
    name: "Luxury Spa Kit",
    price: 300,
    priceAfterDiscount: 300,
    stockRemaining: 4,
    images: [Beauty02.src, Beauty01.src, Beauty03.src, Beauty04.src, Beauty05.src],
    metadata: {
      fabrication: "Various",
      colour: ColourEnum.White,
      brandId: "3",
      details: ["Bath salts", "Scented candles", "Essential oils"],
    },
    sizes: ["One Size"],
    categories: ["Gift"],
  },
];
