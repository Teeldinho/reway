"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart } from "lucide-react";
import { Product, ProductOptionsSchema, ProductOptionsType } from "@/lib/types/shop-schemas";

type ProductCardProps = {
  product: Product;
};

export default function ProductOptionsForm({ product }: ProductCardProps) {
  const form = useForm<ProductOptionsType>({
    resolver: zodResolver(ProductOptionsSchema),
    defaultValues: {
      quantity: undefined,
      size: undefined,
    },
  });

  function onSubmit(data: ProductOptionsType) {
    toast.success(`Product: ${product.name} / Options: ${JSON.stringify(data, null, 2)}`, {
      description: `Ideally, this is when we submit the validated form data to the backend to add the product to the cart.
      `,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-rewayGrey font-semibold uppercase">Size</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl className="text-rewayGrey uppercase bg-white ring-1 ring-rewayGrey/15">
                  <SelectTrigger>
                    <SelectValue placeholder="SELECT SIZE" className="text-rewayGrey" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage>{form.formState.errors.size?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-rewayGrey font-semibold uppercase">Quantity</FormLabel>
              <Select onValueChange={(value) => field.onChange(Number(value))} value={field.value?.toString()}>
                <FormControl className="text-rewayGrey uppercase bg-white ring-1 ring-rewayGrey/15">
                  <SelectTrigger>
                    <SelectValue placeholder="SELECT QUANTITY" className="text-rewayGrey" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Array.from({ length: product.stockRemaining }, (_, i) => i + 1).map((quantity) => (
                    <SelectItem key={quantity} value={quantity.toString()}>
                      {quantity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex items-center pt-2">
          <Button size={"lg"} type="submit" className="w-full group">
            <ShoppingCart className="size-7 group-hover:animate-bounce" />
            <p className="pl-3">Add to Cart</p>
          </Button>
        </div>
      </form>
    </Form>
  );
}
