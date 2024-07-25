import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

type ProductPreviewEnlargedImageProps = {
  imageUrl: string;
};

export default function ProductPreviewEnlargedImage({ imageUrl }: ProductPreviewEnlargedImageProps) {
  return (
    <Card className="w-full h-full  bg-rewayLightGrey">
      <CardContent className="p-0">
        <AspectRatio ratio={1 / 1} className="relative h-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Enlarged Selected Image ${imageUrl}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </AspectRatio>
      </CardContent>
    </Card>
  );
}
