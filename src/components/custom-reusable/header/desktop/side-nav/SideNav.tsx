import SearchAndFilter from "@/components/custom-reusable/header/desktop/side-nav/SearchAndFilter";
import SideBanner from "@/components/custom-reusable/header/desktop/side-nav/SideBanner";
import MailListPrompt from "@/components/custom-reusable/header/desktop/side-nav/MailListPrompt";

export default function SideNav() {
  return (
    <div className="hidden lg:flex flex-col gap-8 h-full w-[35%] lg:w-[20%] max-h-fit ">
      <SearchAndFilter />
      <div className="flex-1 pl-8 flex flex-col gap-8 items-center pb-8">
        <SideBanner />
        <MailListPrompt />
      </div>
    </div>
  );
}
