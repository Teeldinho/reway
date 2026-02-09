"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinks } from "../../navLinks";

export default function DesktopNavMainLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-8">
      {NavLinks.map((link) => (
        <li key={link.title}>
          <Link
            href={link.link}
            prefetch={false}
            scroll={false}
            className={cn("text-rewayBlack hover:text-primary/90 font-suezOne uppercase text-base", { "text-primary": pathname.startsWith(link.link) })}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
