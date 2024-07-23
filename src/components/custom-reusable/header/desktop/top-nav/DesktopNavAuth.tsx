"use client";

import { Button } from "@/components/ui/button";

export default function DesktopNavAuth() {
  return (
    <div className="flex gap-1">
      <Button variant={"ghost"}>Sign Up</Button>
      <Button variant={"outline"}>Login</Button>
    </div>
  );
}
