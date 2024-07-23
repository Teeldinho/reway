import Image from "next/image";
import TopBannerIMG from "../../../../public/assets/Top Banner.png";
import { Button } from "@/components/ui/button";

export default function TopBanner() {
  return (
    <div className="relative w-full h-[89px] rounded-[2px] overflow-hidden">
      <Image src={TopBannerIMG} alt="Top Banner" fill className="object-fill" />

      <div className="absolute w-full h-full flex items-center justify-between px-16 z-10">
        <div className="min-w-fit">
          <h1 className="w-full font-suezOne uppercase text-[30px] leading-[39.18px] text-white">Summer Sale!</h1>
          <h2 className="w-full font-suezOne uppercase text-[20px] leading-[26.12px] text-white">Up to 50% off!</h2>
        </div>

        <Button
          variant={"outline"}
          className="absolute top-6 right-8 md:right-20 lg:right-[360px] max-w-fit text-white border-white hover:bg-white/20"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
