"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BrandLogo from "@/components/custom-reusable/header/BrandLogo";
import { Menu } from "lucide-react";
import MobileNavLink from "@/components/custom-reusable/header/mobile/MobileNavLink";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavLinks } from "../navLinks";
import DesktopNavIconLinks from "../desktop/top-nav/DesktopNavIconLinks";
import DesktopNavAuth from "../../auth/AuthTriggerButtons";
import SearchStoreTrigger from "@/components/custom-reusable/SearchStoreTrigger";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="lg:hidden w-full flex items-center justify-between bg-card py-4 px-4 md:px-8 z-20">
      <Link href={"/"}>
        <BrandLogo />
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <div className="flex items-center gap-4">
          <SearchStoreTrigger />
          <SheetTrigger asChild className="hover:cursor-pointer">
            <Menu className="size-8 md:size-10" />
          </SheetTrigger>
        </div>

        <SheetContent side="left" className="p-4 bg-background flex flex-col gap-8">
          <div>
            <MobileNavLink href="/" onOpenChange={setOpen}>
              <BrandLogo />
            </MobileNavLink>

            <ScrollArea className="my-2 h-[calc(100svh-14rem)] md:h-[calc(100svh-16rem)] py-4 pl-0">
              <div className="flex flex-col space-y-4">
                {NavLinks.map((item, index) => (
                  <MobileNavLink href={item.link} className="flex items-center" onOpenChange={setOpen} key={index}>
                    <h4 className="font-medium text-2xl font-suezOne">{item.title}</h4>
                  </MobileNavLink>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Icon Navigation */}
          <DesktopNavIconLinks />

          {/* Auth */}
          <DesktopNavAuth />
        </SheetContent>
      </Sheet>
    </nav>
  );
}
