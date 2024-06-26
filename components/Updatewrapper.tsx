import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  interface UpdatewrapperProps {
    children: React.ReactNode,
    title: string,
  }

export const Updatewrapper = ({children, title}:UpdatewrapperProps) => {
  return (
    <Card className='w-[500px]'>
  <CardHeader>
    <CardTitle className='flex items-center justify-center'>{title}</CardTitle>
  </CardHeader>
  <CardContent>
    {children}
  </CardContent>
  
</Card>
  )
}
