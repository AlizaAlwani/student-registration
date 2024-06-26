import { Updateform } from '@/components/Updateform'
import { Updatewrapper } from '@/components/Updatewrapper'
import React from 'react'

const updatecourse = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Updatewrapper title='Update Course Form'>
        <Updateform />
      </Updatewrapper>
    </div>
  )
}

export default updatecourse
