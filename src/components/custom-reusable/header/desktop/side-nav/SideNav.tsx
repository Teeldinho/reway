import SearchAndFilter from "@/components/custom-reusable/header/desktop/side-nav/SearchAndFilter";
import SideBanner from "@/components/custom-reusable/header/desktop/side-nav/SideBanner";
import MailListPrompt from "@/components/custom-reusable/header/desktop/side-nav/MailListPrompt";

export default function SideNav() {
  return (
    <div className="flex flex-col gap-8 max-h-[95%] w-[25%]">
      <SearchAndFilter />
      <div className="w-full h-full pl-8 flex flex-col gap-8 items-center">
        <SideBanner />
        <MailListPrompt />
      </div>
    </div>
  );
}
