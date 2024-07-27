import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <div className="pt-4 pb-2 px-4 gap-4 lg:p-0 lg:h-[77px] w-full flex flex-col lg:flex-row bg-rewayLightGrey lg:px-8 items-center justify-between">
      <h2 className="text-rewayGrey font-suezOne text-sm lg:text-[17px] uppercase lg:pl-20">Adventure is just around the corner!</h2>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-2 items-center wrap ">
        <Button variant={"outline"}>Find A Store</Button>
        <Button variant={"link"} className="text-rewayGrey hover:text-primary">
          Not in South Africa?
        </Button>
      </div>
    </div>
  );
}
