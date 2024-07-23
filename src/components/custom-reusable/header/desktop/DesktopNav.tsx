import Link from "next/link";
import DesktopNavAuth from "./DesktopNavAuth";
import DesktopNavMainLinks from "./DesktopNavMainLinks";
import DesktopNavIconLinks from "./DesktopNavIconLinks";
import BrandLogo from "../BrandLogo";

export default function DesktopNav() {
  return (
    <nav className="hidden w-full z-10 md:fixed md:top-0 md:flex md:flex-row md:items-center md:justify-between bg-white h-[92px] px-8">
      <div className="flex items-center gap-12">
        {/* Logo */}
        <Link href={"/"}>
          <BrandLogo />
        </Link>

        {/* Navigation */}
        <DesktopNavMainLinks />
      </div>

      <div className="flex items-center gap-12">
        {/* Icon Navigation */}
        <DesktopNavIconLinks />

        {/* Auth */}
        <DesktopNavAuth />
      </div>
    </nav>
  );
}
