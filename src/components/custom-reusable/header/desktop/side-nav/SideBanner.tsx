import Image from "next/image";
import AdvertBanner from "../../../../../../public/assets/Advert Banner.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function SideBanner() {
  return (
    <div className="w-full h-full max-w-[307.2px] relative flex-1 rounded-[2px] overflow-hidden">
      <AspectRatio ratio={9 / 16} className="flex-1 relative h-full overflow-hidden">
        <Image src={AdvertBanner} alt="Advert Banner" fill className="object-fill" />
      </AspectRatio>
    </div>
  );
}
