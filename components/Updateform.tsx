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
import { Students2 } from '@/actions/student'


export const updateSchema = z.object({
    id: z.string().nonempty(),
    course: z.string().min(2, {
        message: "Course Name must be at least 2 characters.",
      }),
  })
export const Updateform = () => {
    const form = useForm<z.infer<typeof updateSchema>>({
        resolver: zodResolver(updateSchema),
        defaultValues: {
          id: "",
          course: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof updateSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        Students2(values)
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
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Course Name you want to Update" {...field} />
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
