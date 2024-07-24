import CTABanner from "@/components/custom-reusable/header/CTABanner";
import DesktopNav from "@/components/custom-reusable/header/desktop/top-nav/DesktopNav";
import MobileNav from "@/components/custom-reusable/header/mobile/MobileNav";

export default function Header() {
  return (
    <div className="flex flex-col gap-0 min-w-full sticky top-0">
      <DesktopNav />
      <MobileNav />
      <CTABanner />
    </div>
  );
}
