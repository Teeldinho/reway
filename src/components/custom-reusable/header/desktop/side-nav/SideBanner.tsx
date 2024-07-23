import Image from "next/image";
import AdvertBanner from "../../../../../../public/assets/Advert Banner.png";

export default function SideBanner() {
  return (
    <div className="w-full max-w-[307.2px] relative flex-1 rounded-[2px] overflow-hidden">
      <Image src={AdvertBanner} alt="Advert Banner" fill className="object-fill" />
    </div>
  );
}
