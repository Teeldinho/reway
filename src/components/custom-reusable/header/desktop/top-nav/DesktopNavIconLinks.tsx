import Link from "next/link";
import { NavIconLinks } from "../../navLinks";

export default function DesktopNavIconLinks() {
  return (
    <ul className="flex items-center gap-8">
      {NavIconLinks.map((link) => (
        <Link key={link.title} href={link.link} className=" flex items-center justify-center">
          <div className="size-[28px]">{link.icon}</div>
        </Link>
      ))}
    </ul>
  );
}
