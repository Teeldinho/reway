"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { MoveRight } from "lucide-react";
import { SignUpSchema, SignUpType } from "@/lib/types/auth-schemas";
import { Button } from "@/components/ui/button";
import { useShopStore } from "@/stores/ShopStore";

type SignUpFormProps = {
  onOpenChange: (open: boolean) => void;
};

export default function SignUpForm({ onOpenChange }: SignUpFormProps) {
  const signIn = useShopStore((store) => store.signIn);

  // Define the form:
  const form = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: SignUpType) {
    toast.success(`Welcome, ${JSON.stringify(data, null, 2)}`, {
      description: "This simulates a successful account registration after validating the form. Auth buttons should now be hidden.",
    });

    // Simulate a successful sign up after registration:
    signIn();

    onOpenChange(false);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex items-center gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Surname</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full pt-1">
            <Button type="submit" className="w-full">
              Register
              <MoveRight className="size-4 ml-2" />
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
