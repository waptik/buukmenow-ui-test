"use client";

import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { Textarea } from "./ui/textarea";

const groups = [{ label: "All customers", value: "customers" }] as const;

const statuses = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
] as const;

const formSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(50, {
      message: "Title must not be more than 50 characters.",
    }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  })
  .max(100, {
    message: "Description must not be more than 100 characters.",
  }),
  group: z.string({
    required_error: "Please select a target group.",
  }),
  status: z.string({
    required_error: "Please select a campaign status.",
  }),
});

type CampaignFormValues = z.infer<typeof formSchema>;

const defaultValues: Partial<CampaignFormValues> = {};

const CampaignForm = ({
  children,
  onSave,
}: {
  campaign?: CampaignFormValues;
  children: ReactNode;
  onSave: (d: CampaignFormValues) => Promise<void>;
}) => {
  const form = useForm<CampaignFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: CampaignFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await onSave(values);
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Write your campaign title here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your message here" {...field} />
                </FormControl>
                <FormDescription>Max 100 words</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="group"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Target group</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? groups.find((group) => group.value === group.value)
                              ?.label
                          : "Select your Target group"}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Search your target group..." />
                      <CommandEmpty>No group found.</CommandEmpty>
                      <CommandGroup>
                        {groups.map((group) => (
                          <CommandItem
                            value={group.label}
                            key={group.value}
                            onSelect={() => {
                              form.setValue("group", group.value);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                group.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {group.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Campaign status</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? statuses.find(
                              (status) => status.value === field.value
                            )?.label
                          : "Select a status"}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Search status..." />
                      <CommandEmpty>No status found.</CommandEmpty>
                      <CommandGroup>
                        {statuses.map((status) => (
                          <CommandItem
                            value={status.label}
                            key={status.value}
                            onSelect={() => {
                              form.setValue("status", status.value);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                status.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {status.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          {children}
        </form>
      </Form>
    </>
  );
};

export default CampaignForm;
