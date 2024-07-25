"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { MailListFormSchema, MailListFormSchemaType } from "@/lib/types/types-and-schemas";

export function MailListForm() {
  const form = useForm<z.infer<typeof MailListFormSchema>>({
    resolver: zodResolver(MailListFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: MailListFormSchemaType) {
    toast.success(`Email submitted is: ${data.email}`, {
      description: "You can now receive emails from us. (fake success message)",
    });

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white uppercase font-bold">Email</FormLabel>
              <FormControl>
                <Input placeholder="ENTER EMAIL ADDRESS" {...field} className="bg-white text-rewayGrey" />
              </FormControl>
              <FormMessage className="text-red-400 font-semibold tracking-wider" />
            </FormItem>
          )}
        />

        <div className="w-full flex items-center">
          <Button variant={"default"} size={"md"} type="submit" className="bg-white text-primary hover:bg-white/90 max-w-fit mx-auto">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
