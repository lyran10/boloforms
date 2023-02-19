import React from 'react'
import { box1 } from '../../utils/data'

export const Box1 = () => {

  const data = () => {
  return(
    box1.map((item,index) => {
      return(
        <div key={index}>
        <span className="mr-2 text-2xl">{item.emoji}</span>
        <span className='font-black text-2xl'>{item.header}</span>
        </div>
      )
  })
  )
  }


  return (
    
         <div className='flex flex-col gap-2'>
         {data()}
        </div>
  
  )
}