import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import SignInForm from "@/components/custom-reusable/auth/forms/SignInForm";
import { useState } from "react";

export default function SignIn() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Login</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[400px] m-4 lg:m-0">
        <DialogHeader>
          <DialogTitle className="font-suezOne text-3xl uppercase">Sign In</DialogTitle>
          <DialogDescription>Enter any valid details to sign into your fake account.</DialogDescription>
        </DialogHeader>

        <SignInForm onOpenChange={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
