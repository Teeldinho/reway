"use client";
import Image from "next/image";
import TopBannerIMG from "../../../../public/assets/Top Banner.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TopBanner() {
  const router = useRouter();
  return (
    <div className="relative w-full min-h-[90px] lg:max-h-[90px] rounded-[2px]">
      <Image src={TopBannerIMG} alt="Top Banner" fill className="object-fill" />

      <div className="absolute w-full h-full flex flex-row items-center justify-between px-4 lg:px-16 z-10">
        <div className="min-w-fit text-white">
          <h1 className="w-full font-suezOne uppercase lg:text-[30px] lg:leading-[39.18px]">Summer Sale!</h1>
          <h2 className="w-full font-suezOne uppercase lg:text-[20px] lg:leading-[26.12px]">Up to 50% off!</h2>
        </div>

        <Button
          variant={"outline"}
          className="md:absolute md:top-6 md:right-[10%] lg:right-[30%] max-w-fit text-white border-white hover:bg-white/20 animate-pulse duration-1000 transition-transform"
          onClick={() => router.push("/sale")}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
