"use client";

import { Button } from "@/components/ui/button";

export default function DesktopNavAuth() {
  return (
    <div className="flex gap-1">
      <Button variant={"ghost"} className="hover:cursor-not-allowed order-2 lg:order-1">
        Sign Up
      </Button>
      <Button variant={"outline"} className="hover:cursor-not-allowed">
        Login
      </Button>
    </div>
  );
}
