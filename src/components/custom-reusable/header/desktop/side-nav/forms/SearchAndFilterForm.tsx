"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { SearchAndFilterFormSchema, SearchAndFilterFormSchemaType } from "@/lib/types/types-and-schemas";
import SearchIcon from "@/components/custom-reusable/icons/SearchIcon";
import { dummyBrandsData } from "@/lib/dummy-data";
import { ColourEnum } from "./helpers/color-helpers";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import MultipleSelector, { Option } from "@/components/ui/multi-select";
import { transformToOptions } from "@/lib/utils";

export function SearchAndFilterForm() {
  const form = useForm<SearchAndFilterFormSchemaType>({
    resolver: zodResolver(SearchAndFilterFormSchema),
    defaultValues: {
      brands: dummyBrandsData.slice(0, 2),
      color: null,
      pricingRange: 750,
    },
  });

  const transformedBrands: Option[] = transformToOptions(dummyBrandsData, "id", "name");

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
          render={({ field }) => {
            const transformedValue: Option[] = transformToOptions(field.value, "id", "name");

            return (
              <FormItem>
                <FormLabel className="text-rewayGrey font-semibold uppercase">Brand</FormLabel>
                <FormControl>
                  <MultipleSelector
                    {...field}
                    value={transformedValue as Option[]}
                    defaultOptions={transformToOptions(transformedBrands, "id", "name") as Option[]}
                    placeholder=""
                    emptyIndicator={<p className="text-center text-lg leading-10 text-foreground">no results found.</p>}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-rewayGrey font-semibold uppercase">Colour</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <FormControl className="text-rewayGrey uppercase">
                  <SelectTrigger>
                    <SelectValue placeholder="Select colour" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(ColourEnum).map((colour) => (
                    <SelectItem key={colour} value={colour}>
                      {colour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage>{form.formState.errors.color?.message}</FormMessage>
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
                <Slider min={0} max={2500} step={100} value={[value]} onValueChange={(val) => onChange(val[0])} />
              </FormControl>
              <FormMessage>{form.formState.errors.pricingRange?.message}</FormMessage>
            </FormItem>
          )}
        />

        <div className="w-full flex items-center pt-2">
          <Button variant={"default"} size={"md"} type="submit" className="max-w-fit mx-auto">
            <SearchIcon className="size-[16px] fill-white group-hover:animate-pulse" />
            <p className="ml-3">Search</p>
          </Button>
        </div>
      </form>
    </Form>
  );
}
