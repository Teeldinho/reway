import LogoIMG from "../../../../public/assets/Logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export default function BrandLogo({ className }: LogoProps) {
  return (
    <div className={cn("lg:h-[44.81px] lg:w-[163.69px] h-8 w-20 md:h-12 md:w-28 relative", className)}>
      <Image src={LogoIMG} alt="Logo" fill />
    </div>
  );
}
