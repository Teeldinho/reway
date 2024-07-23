import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <div className="h-[77px] w-full flex bg-rewayLightGrey px-8 items-center justify-between">
      <h2 className="text-rewayGrey font-suezOne text-[17px] uppercase pl-20">Adventure is just around the corner!</h2>
      <div className="flex gap-2 items-center">
        <Button variant={"outline"}>Find A Store</Button>
        <Button variant={"link"} className="text-rewayGrey hover:text-primary">
          Not in South Africa?
        </Button>
      </div>
    </div>
  );
}
