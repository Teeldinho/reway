"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { SearchAndFilterFormSchema, SearchAndFilterFormSchemaType } from "@/lib/types/types-and-schemas";
import SearchIcon from "@/components/custom-reusable/icons/SearchIcon";
import { dummyBrandsData } from "@/lib/dummy-data";
import { ColorEnum } from "./helpers/color-helpers";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export function SearchAndFilterForm() {
  const form = useForm<SearchAndFilterFormSchemaType>({
    resolver: zodResolver(SearchAndFilterFormSchema),
    defaultValues: {
      brands: dummyBrandsData.slice(0, 2),
      color: null,
      pricingRange: 750,
    },
  });

  function onSubmit(data: SearchAndFilterFormSchemaType) {
    toast.success(`Filters to be applied are: ${JSON.stringify(data, null, 2)}`, {
      description: "Filters are not yet implemented.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
        <FormField
          control={form.control}
          name="brands"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-rewayGrey font-semibold uppercase">Brands</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={""}>
                <FormControl className="text-rewayGrey uppercase">
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {dummyBrandsData.map((brand) => (
                    <SelectItem key={brand.id} value={brand.name}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-rewayGrey font-semibold uppercase">Colour</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value ? field.value.toString() : ""}>
                <FormControl className="text-rewayGrey uppercase">
                  <SelectTrigger>
                    <SelectValue placeholder="Select colour" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(ColorEnum).map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pricingRange"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel className="text-rewayGrey font-semibold uppercase">Pricing - R{value}</FormLabel>
              <FormControl>
                <Slider min={0} max={2500} step={100} defaultValue={[value]} onValueChange={onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex items-center pt-2">
          <Button variant={"default"} size={"md"} type="button" className="max-w-fit mx-auto">
            <SearchIcon className="size-[16px] fill-white group-hover:animate-pulse" />
            <p className="ml-3">Search</p>
          </Button>
        </div>
      </form>
    </Form>
  );
}
