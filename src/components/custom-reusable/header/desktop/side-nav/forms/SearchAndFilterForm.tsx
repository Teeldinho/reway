"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
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
import { searchParamsSerializer } from "@/stores/nuqs/slices/searchSlice";

const transformedBrands: Option[] = transformToOptions(dummyBrandsData, "id", "name");

export function SearchAndFilterForm() {
  const router = useRouter();
  const [filters] = useParamsStoreClient().filters();
  const [search] = useParamsStoreClient().search();

  // const validBrands = filters?.brands && filters.brands.every((brand) => dummyBrandsData.some((b) => b.id === brand.id));

  const form = useForm<SearchAndFilterFormSchemaType>({
    resolver: zodResolver(SearchAndFilterFormSchema),
    defaultValues: {
      brands: [],
      color: null,
      pricingRange: 3500,
    },
  });

  function onSubmit(data: SearchAndFilterFormSchemaType) {
    toast.success(`Filters to be applied are: ${JSON.stringify(data, null, 2)}`, {
      description: "Filters are not yet implemented.",
    });

    router.replace(
      `/search${
        search
          ? `${searchParamsSerializer({
              ...search,
            })}`
          : ""
      }${filterParamsSerializer({
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
              <Select onValueChange={(value) => field.onChange(value === "none" ? null : value)} value={field.value || "none"}>
                <FormControl className="text-rewayGrey uppercase">
                  <SelectTrigger>
                    <SelectValue placeholder="Select colour" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem key="none" value="none">
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
                <Slider min={0} max={5000} step={500} value={[value]} onValueChange={(val) => onChange(val[0])} />
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
