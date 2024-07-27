"use client";

import Image from "next/image";
import AdvertBanner from "../../../../../../public/assets/Advert Banner.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SideBanner() {
  const [isHidden, setIsHidden] = useState(false);

  const handleHide = () => {
    setIsHidden(true);
  };

  return !isHidden ? (
    <div className="w-full h-full lg:max-w-[307.2px] relative flex-1 rounded-[2px] overflow-hidden">
      <AspectRatio ratio={9 / 16} className="flex-1 relative h-full overflow-hidden">
        <Image src={AdvertBanner} alt="Advert Banner" fill className="object-fill" />
      </AspectRatio>
      <Button variant={"ghost"} className="bg-transparent border-none shadow-none absolute top-1 right-1" size={"icon"} onClick={handleHide} />
    </div>
  ) : null;
}
