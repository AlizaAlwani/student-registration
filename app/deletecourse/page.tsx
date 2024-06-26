import { Deleteform } from '@/components/Deleteform'
import { Deletewrapper } from '@/components/Deletewrapper'
import React from 'react'

export const Deletecourse = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <Deletewrapper title='Deletion of Course '>
        <Deleteform />
      </Deletewrapper>
    </div>
  )
}

export default Deletecourse
