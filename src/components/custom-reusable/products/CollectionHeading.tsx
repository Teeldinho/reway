import { CollectionsEnum, CollectionDisplayName } from "@/lib/types/product-helpers";

type CollectionHeadingProps = {
  collectionId: CollectionsEnum;
};

export default function CollectionHeading({ collectionId }: CollectionHeadingProps) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-rewayGrey font-ptSans font-semibold tracking-widest">Collection</p>
      <h1 className="font-suezOne text-3xl uppercase">{CollectionDisplayName[collectionId]}</h1>
    </div>
  );
}
