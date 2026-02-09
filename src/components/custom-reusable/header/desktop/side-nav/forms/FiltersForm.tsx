"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SearchAndFilterFormSchema, SearchAndFilterFormSchemaType } from "@/lib/types/types-and-schemas";
import SearchIcon from "@/components/custom-reusable/icons/SearchIcon";
import { dummyBrandsData } from "@/lib/dummy-data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Option, transformToOptions } from "@/lib/utils";
import { ColourEnum } from "@/lib/types/colour-helpers";
import { MultiSelect } from "@/components/ui/multi-select";
import { useParamsStoreClient } from "@/stores/nuqs/paramsStore";
import { filterParamsSerializer } from "@/stores/nuqs/slices/filterSlice";
import { useRouter } from "next/navigation";
import { FILTER_COLOR_NONE, FILTER_PRICE_RANGE } from "@/lib/constants/filter";

const transformedBrands: Option[] = transformToOptions(dummyBrandsData, "id", "name");

type FiltersFormProps = {
  onOpenChange?: (open: boolean) => void;
};

export function FiltersForm({ onOpenChange }: FiltersFormProps) {
  const router = useRouter();
  const [filters] = useParamsStoreClient().filters();

  const isValidPricingRange = filters?.pricingRange && filters.pricingRange >= 0;
  const isValidBrands = filters?.brands && filters.brands.length > 0;
  const isValidColor = filters?.color && Object.values(ColourEnum).includes(filters.color);

  const form = useForm<SearchAndFilterFormSchemaType>({
    resolver: zodResolver(SearchAndFilterFormSchema),
    defaultValues: {
      brands: isValidBrands ? dummyBrandsData.filter((brand) => filters.brands?.includes(brand.name)) : dummyBrandsData,
      color: isValidColor ? filters.color : null,
      pricingRange: isValidPricingRange ? filters.pricingRange : FILTER_PRICE_RANGE.DEFAULT,
    },
  });

  function onSubmit(data: SearchAndFilterFormSchemaType) {
    onOpenChange?.(false);

    router.push(
      `/filter${filterParamsSerializer({
        brands: data.brands.map((brand) => brand.name),
        color: data.color,
        pricingRange: data.pricingRange,
      })}`
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
        <FormField
          control={form.control}
          name="brands"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-rewayGrey font-semibold uppercase">Brand</FormLabel>
              <FormControl>
                <Controller
                  name="brands"
                  control={form.control}
                  render={({ field }) => (
                    <MultiSelect
                      options={transformedBrands}
                      onValueChange={(value: string[]) => {
                        const selectedBrands = dummyBrandsData.filter((brand) => value.includes(brand.id));
                        field.onChange(selectedBrands);
                      }}
                      defaultValue={field.value.map((item) => item.id)}
                      placeholder="Select brands"
                    />
                  )}
                />
              </FormControl>
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
              <Select
                onValueChange={(value) => field.onChange(value === FILTER_COLOR_NONE ? null : value)}
                value={field.value || FILTER_COLOR_NONE}
              >
                <FormControl className="text-rewayGrey uppercase">
                  <SelectTrigger>
                    <SelectValue placeholder="Select colour" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem key={FILTER_COLOR_NONE} value={FILTER_COLOR_NONE}>
                    All Colors
                  </SelectItem>
                  {Object.values(ColourEnum).map((colour) => (
                    <SelectItem key={colour} value={colour}>
                      {colour}
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
                 <Slider
                   min={FILTER_PRICE_RANGE.MIN}
                   max={FILTER_PRICE_RANGE.MAX}
                   step={FILTER_PRICE_RANGE.STEP}
                   value={[value]}
                   onValueChange={(val) => onChange(val[0])}
                 />
              </FormControl>
              <FormMessage>{form.formState.errors.pricingRange?.message}</FormMessage>
            </FormItem>
          )}
        />

        <div className="w-full flex items-center pt-4">
          <Button variant={"default"} size={"md"} type="submit" className="w-full lg:max-w-fit mx-auto">
            <SearchIcon className="size-[16px] fill-white group-hover:animate-pulse" />
            <span className="ml-3">Search</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
