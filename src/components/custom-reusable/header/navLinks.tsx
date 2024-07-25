import GiftIcon from "@/components/custom-reusable/icons/GiftIcon";
import HeartIcon from "@/components/custom-reusable/icons/HeartIcon";
import StarIcon from "@/components/custom-reusable/icons/StarIcon";
import { TagIcon } from "@/components/custom-reusable/icons/TagIcon";
import { CollectionSlug, CollectionsEnum } from "@/lib/types/product-helpers";

export const NavLinks = Object.keys(CollectionsEnum).map((key) => {
  const collection = CollectionsEnum[key as keyof typeof CollectionsEnum];
  return { title: collection, link: `/${CollectionSlug[collection]}` };
});

export const NavIconLinks = [
  { title: "Gifts", link: "#", icon: <GiftIcon className="fill-rewayGrey hover:fill-primary h-full w-full" /> },
  { title: "Starred", link: "#", icon: <StarIcon className="fill-rewayGrey hover:fill-primary h-full w-full" /> },
  { title: "Favourites", link: "#", icon: <HeartIcon className="fill-rewayGrey hover:fill-primary h-full w-full" /> },
  { title: "Purchases", link: "#", icon: <TagIcon className="fill-rewayGrey hover:fill-primary h-full w-full" /> },
];
