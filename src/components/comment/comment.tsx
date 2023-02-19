import React from 'react'
import { Data } from '../../utils/interface'

export const Comment = ({content,width,name,comp1,comp2,comp3} : Data) => {

  return (
    <div className='mt-[80px] w-full flex flex-col gap-10 justify-center items-center'>
      <div className='flex shadow-custom justify-start items-center p-10 rounded-3xl bg-white gap-5 w-5/6 '>
        <div className={`h-[100px] w-[200px] flex justify-center items-center`}>
          <div className={`w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:h-[150px] lg:w-[150px] md:h-[150px] md:w-[150px] border-2 rounded-full bg-cover bg-center bg-raman`}>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-2'>
            <img className='w-32' src="https://www.boloforms.com/_next/static/media/Stars.885edd0c.svg" alt="" />
          </div>
        <span className='text-sm font-thin sm:text-md md:text-lg lg:text-lg'>{content}</span>
        <span className='font-extrabold text-lg'>{name}</span>
      
        </div>
      </div>
      <div className='flex flex-col gap-5 md:flex-row lg:flex-row'>
        {comp2}
        {comp3}
        </div> 
       {comp1}
    </div>
  )
  }