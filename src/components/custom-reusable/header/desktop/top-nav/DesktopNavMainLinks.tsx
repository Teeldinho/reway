"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinks } from "../../navLinks";

export default function DesktopNavMainLinks() {
  const pathname = usePathname();

  console.log("DesktopNavMainLinks -> pathname", pathname);

  return (
    <ul className="flex items-center gap-8">
      {NavLinks.map((link) => (
        <Link
          key={link.title}
          href={link.link}
          scroll={false}
          className={cn("text-rewayBlack hover:text-primary/90 font-suezOne uppercase text-base", { "text-primary": pathname.startsWith(link.link) })}
        >
          {link.title}
        </Link>
      ))}
    </ul>
  );
}
