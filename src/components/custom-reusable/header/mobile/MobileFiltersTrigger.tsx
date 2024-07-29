"use client";

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FiltersForm } from "../desktop/side-nav/forms/FiltersForm";
import { useState } from "react";

export default function MobileFiltersTrigger() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant={"ghost"} className="group max-w-fit  hover:scale-125 transition-transform duration-500" size={"icon"}>
          <Filter className="mr-2 lg:ml-2 size-8 lg:size-5 text-muted-foreground lg:text-white" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-2 px-4 pb-4">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-suezOne uppercase">Filter your store</DrawerTitle>
          <DrawerDescription>Apply some filters to the store</DrawerDescription>
        </DrawerHeader>

        <FiltersForm onOpenChange={setOpen} />
      </DrawerContent>
    </Drawer>
  );
}
