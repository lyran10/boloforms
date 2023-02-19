import React from 'react'
import { array } from '../../utils/data'

export const Boxes = () => {
 
  const data = () => {
    return(
      array.map((item,index) => {
          return(
            <div key={index} className='flex flex-col gap-2 lg:w-[350px] lg:h-[350px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px]'>
                  <img className='w-14' src={item.icon} alt="" />
                  <div className='flex flex-col gap-1'>
                  <span className='font-extrabold text-2xl'>{item.header}</span>
                  <span>{item.para}</span>
                  </div>
            </div>
          )
      })
    
    )
  }

  return (
    <div className='grid justify-center items-center gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {data()}
     
      </div>
  )
}