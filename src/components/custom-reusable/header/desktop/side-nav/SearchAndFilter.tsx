import ChevronLeftIcon from "@/components/custom-reusable/icons/ChevronLeftIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SearchIcon from "@/components/custom-reusable/icons/SearchIcon";
import { Button } from "@/components/ui/button";
import { SearchAndFilterForm } from "@/components/custom-reusable/header/desktop/side-nav/forms/SearchAndFilterForm";
import { Dispatch, SetStateAction } from "react";

type SearchAndFilterProps = {
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
};

export default function SearchAndFilter({ isHidden, setIsHidden }: SearchAndFilterProps) {
  return (
    <Card className="border-2 border-l-0 border-primary w-full relative transition-all duration-1000">
      <CardHeader className="flex flex-col gap-0 bg-primary pl-8 py-4">
        <Button
          variant={"ghost"}
          className="group max-w-fit self-start pl-0 hover:bg-transparent"
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          <ChevronLeftIcon className="size-[16px] fill-white group-hover:fill-white/80 group-hover:animate-pulse pr-2" />
          <p className="text-white font-ptSans text-base capitalize">Hide</p>
        </Button>

        <div className="flex items-center gap-3">
          <CardTitle className="font-suezOne text-white text-[20px] leading-[26.12px] uppercase">Search Reway</CardTitle>

          <Button variant={"ghost"} className="group max-w-fit size-[16px] hover:bg-transparent" size={"icon"}>
            <SearchIcon className="w-full h-full fill-white group-hover:animate-pulse" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pl-8 pt-4">
        <SearchAndFilterForm />
      </CardContent>
    </Card>
  );
}
