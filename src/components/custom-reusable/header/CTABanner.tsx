"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function CTABanner() {
  return (
    <div className="pt-4 pb-2 px-4 gap-4 lg:p-0 lg:h-[77px] w-full flex flex-col lg:flex-row bg-rewayLightGrey lg:px-8 items-center justify-between">
      <h2 className="text-rewayGrey font-suezOne text-sm lg:text-[17px] uppercase lg:pl-20">Adventure is just around the corner!</h2>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-2 items-center wrap ">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant={"outline"}>Find A Store</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-full max-w-[550px]">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-suezOne uppercase text-3xl">Feature not implemented.</AlertDialogTitle>
              <AlertDialogDescription className="text-lg">For the sake of simplicity, we have not implemented this feature.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Ok, noted</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button
          variant={"link"}
          className="text-rewayGrey hover:text-primary hover:cursor-help"
          onClick={() =>
            toast.info(`Help Center`, {
              description: "This simulates a link to the help center",
            })
          }
        >
          Not in South Africa?
        </Button>
      </div>
    </div>
  );
}
