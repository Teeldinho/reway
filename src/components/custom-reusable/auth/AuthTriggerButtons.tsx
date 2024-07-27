"use client";

import SignIn from "@/components/custom-reusable/auth/SignIn";
import SignUp from "./SignUp";
import { useShopStore } from "@/stores/ShopStore";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AuthTriggerButtons() {
  const { signOut, isSignedIn } = useShopStore((store) => store);

  return (
    <>
      {isSignedIn ? (
        <Button onClick={signOut} variant={"destructive"} className="flex items-center gap-2">
          <LogOut />
          <span>Sign Out</span>
        </Button>
      ) : (
        <div className="flex gap-1">
          <SignIn />
          <SignUp />
        </div>
      )}
    </>
  );
}
