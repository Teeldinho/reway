"use client";

import SearchAndFilter from "@/components/custom-reusable/header/desktop/side-nav/SearchAndFilter";
import SideBanner from "@/components/custom-reusable/header/desktop/side-nav/SideBanner";
import MailListPrompt from "@/components/custom-reusable/header/desktop/side-nav/MailListPrompt";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SideNav() {
  const [isHidden, setIsHidden] = useState(false);

  return isHidden ? (
    <Button
      className="max-w-fit pl-2 pr-1 ml-8 flex items-center"
      onClick={() => {
        setIsHidden(!isHidden);
      }}
    >
      <p className="text-white font-ptSans text-base capitalize">Show</p>
      <ChevronRight className="size-5" />
    </Button>
  ) : (
    <div className="hidden lg:flex flex-col gap-8 h-full w-[35%] lg:w-[20%] max-h-fit">
      <SearchAndFilter isHidden={isHidden} setIsHidden={setIsHidden} />
      <div className="flex-1 pl-8 flex flex-col gap-8 items-center pb-8">
        <SideBanner />
        <MailListPrompt />
      </div>
    </div>
  );
}
