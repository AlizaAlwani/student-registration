import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  interface StudentwrapperProps {
    children: React.ReactNode,
    title: string,
  }

export const Studentwrapper = ({children , title}: StudentwrapperProps) => {
  return (
    <Card className='w-[600px]'>
  <CardHeader>
    <CardTitle className='flex items-center justify-center'>{title}</CardTitle>
  </CardHeader>
  <CardContent>
    {children}
  </CardContent>
</Card>

  )
}
