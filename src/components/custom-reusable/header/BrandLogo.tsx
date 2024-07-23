import LogoIMG from "../../../../public/assets/Logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export default function BrandLogo({ className }: LogoProps) {
  return (
    <div className={cn("h-[44.81px] w-[163.69px] relative", className)}>
      <Image src={LogoIMG} alt="Logo" layout="fill" objectFit="contain" />
    </div>
  );
}
