import Banner from "@/components/custom-reusable/header/Banner";
import DesktopNav from "@/components/custom-reusable/header/desktop/DesktopNav";
import MobileNav from "@/components/custom-reusable/header/mobile/MobileNav";

export default function Header() {
  return (
    <div className="flex flex-col gap-0 min-w-full">
      <DesktopNav />
      <MobileNav />
      <Banner />
    </div>
  );
}
