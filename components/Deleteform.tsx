"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Students1 } from '@/actions/student'


export const deleteSchema = z.object({
    id: z.string().nonempty(),
  })
export const Deleteform = () => {
    const form = useForm<z.infer<typeof deleteSchema>>({
        resolver: zodResolver(deleteSchema),
        defaultValues: {
          id: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof deleteSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        Students1(values)
      }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter student ID" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex items-center justify-center'>
        <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
