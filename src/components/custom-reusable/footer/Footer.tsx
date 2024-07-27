import Link from "next/link";
import { Button } from "@/components/ui/button";
import FacebookIcon from "@/components/custom-reusable/icons/FacebookIcon";
import InstagramIcon from "@/components/custom-reusable/icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-16 bg-rewayDarkGrey text-rewayWhite">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Account */}
        <div>
          <h4 className="text-xl font-bold mb-2 leading-[26.12px] font-suezOne">Account</h4>
          <ul className="space-y-2 font-bold text-rewayLightGrey">
            <li>
              <Link href="#" className="hover:underline hover:text-primary">
                Account details
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:text-primary">
                Orders
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:text-primary">
                Returns and Exchanges
              </Link>
            </li>
          </ul>
        </div>

        {/* The Company */}
        <div>
          <h4 className="text-xl font-bold mb-2 leading-[26.12px] font-suezOne">The Company</h4>
          <ul className="space-y-2 font-bold text-rewayLightGrey">
            <li>
              <Link href="#" className="hover:underline hover:text-primary">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:text-primary">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="md:col-start-4">
          <h4 className="text-xl font-bold mb-4 leading-[26.12px] font-suezOne">Follow us!</h4>
          <ul className="flex space-x-6">
            <Button variant={"ghost"} className="max-w-fit hover:bg-transparent group" size={"icon"}>
              <FacebookIcon className="size-16 min-w-full h-full fill-white group-hover:fill-primary" />
            </Button>
            <Button variant={"ghost"} className="max-w-fit hover:bg-transparent group" size={"icon"}>
              <InstagramIcon className="size-16 min-w-full h-full fill-white group-hover:fill-primary" />
            </Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}
