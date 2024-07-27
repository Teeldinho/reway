"use client";

import SignIn from "@/components/custom-reusable/auth/SignIn";
import SignUp from "./SignUp";

export default function AuthTriggerButtons() {
  return (
    <div className="flex gap-1">
      <SignIn />
      <SignUp />
    </div>
  );
}
