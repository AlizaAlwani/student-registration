import { Studentform } from '@/components/Studentform'
import { Studentwrapper } from '@/components/Studentwrapper'
import React from 'react'

export const Studentcourse = () => {
  return (
    <div className='h-screen flex items-center justify-center shadow-md'>
      <Studentwrapper title='Student Course Registeration Form '>
        <Studentform/>
      </Studentwrapper>
    </div>
  )
}

export default Studentcourse
