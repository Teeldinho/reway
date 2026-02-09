"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import SearchForm from "./products/forms/SearchForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchStoreTrigger() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant={"ghost"} className="group max-w-fit  hover:scale-125 transition-transform duration-500 " size={"icon"}>
            <Search className="mr-2 lg:ml-2 size-8 lg:size-5 text-muted-foreground lg:text-white" />
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="w-full max-w-[550px] mx-2">
          <AlertDialogHeader className="space-y-1 pb-2">
            <AlertDialogTitle className="font-suezOne uppercase text-xl lg:text-3xl text-left">Search Store</AlertDialogTitle>
          </AlertDialogHeader>

            <Button
              className="absolute top-5 right-6 text-destructive"
              variant={"secondary"}
              onClick={() => {
                setOpen(false);
                router.push("/");
              }}
            >
            <SearchX className="size-5 mr-2" />
            Clear
          </Button>

          <SearchForm onOpenChange={setOpen} />
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
