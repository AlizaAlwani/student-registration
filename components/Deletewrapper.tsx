import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

  interface DeletewrapperProps {
    children: React.ReactNode,
    title: string,
  }


export const Deletewrapper = ({children , title}: DeletewrapperProps) => {
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
