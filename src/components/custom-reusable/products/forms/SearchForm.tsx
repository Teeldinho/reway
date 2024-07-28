"use client";

import { Search } from "lucide-react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { SearchSchema, SearchType } from "@/lib/types/types-and-schemas";
import { useParamsStoreClient } from "@/stores/nuqs/paramsStore";
import { searchParamsSerializer } from "@/stores/nuqs/slices/searchSlice";
import { filterParamsSerializer } from "@/stores/nuqs/slices/filterSlice";

type SearchFormProps = {
  onOpenChange: (open: boolean) => void;
};

export default function SearchForm({ onOpenChange }: SearchFormProps) {
  const router = useRouter();
  const [search] = useParamsStoreClient().search();
  const [filters] = useParamsStoreClient().filters();

  // Define the form:
  const form = useForm<SearchType>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      query: search.q ?? "",
    },
  });

  async function onSubmit(data: SearchType) {
    onOpenChange(false);

    toast.success(`Searching for ${JSON.stringify(data, null, 2)}`, {
      description: "This simulates a successful search after validating the form. ",
    });

    router.replace(
      `/search${searchParamsSerializer({
        q: data.query,
      })}${
        filters
          ? `${filterParamsSerializer({
              ...filters,
            })}`
          : ""
      }`
    );
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant={"ghost"}
              className="text-destructive hover:bg-destructive-foreground hover:text-destructive"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit">
              <Search className="size-4 mr-2" />
              Search
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
