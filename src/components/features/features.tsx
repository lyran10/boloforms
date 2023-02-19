import React from 'react'
import { Boxes } from './boxes'

export const Features = () => {
  return (
    <div className= 'p-1 mt-[100px] flex flex-col gap-10 justify-center items-center'>
      <div className='flex flex-col gap-2 justify-center items-center'>
      <span className='font-semibold text-lg lg:text-3xl sm:text-3xl md:text-3xl tracking-wide'>Features</span>
      <span className='text-center'>Everything that your organisation will love & more</span>
      </div>
      <Boxes/>
    </div>
  )
}