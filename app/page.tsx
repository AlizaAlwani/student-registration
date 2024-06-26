import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='h-screen flex items-center justify-center flex-col gap-y-4'>
      <div className='text-3xl font-bold font-serif'>Student Course Registeration Form </div>
      <div className='flex flex-col gap-y-2 w-[250px] '>
        <Button asChild>
          <Link href={'/studentcourse'}>Enroll Now ✔️ </Link>
          </Button>

          <Button asChild>
          <Link href={'/deletecourse'}>Delete Course ❌</Link>
          </Button>

          <Button asChild>
          <Link href={'/updatecourse'}>Update Course ➡️</Link>
          </Button>

      </div>
    </div>
  )
}

export default Home
