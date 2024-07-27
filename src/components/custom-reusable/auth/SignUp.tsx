import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import SignUpForm from "@/components/custom-reusable/auth/forms/SignUpForm";

export default function SignIn() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="order-2 lg:order-1">
          Sign Up
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[400px] m-4 lg:m-0">
        <DialogHeader>
          <DialogTitle className="font-suezOne text-3xl uppercase">Sign Up</DialogTitle>
          <DialogDescription>Enter any valid details to register your fake account.</DialogDescription>
        </DialogHeader>

        <SignUpForm onOpenChange={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
