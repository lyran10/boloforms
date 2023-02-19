import React from 'react'
import { box4 } from '../../utils/data'

export const Box4 = () => {

  const data = () => {
    return (
      box4.map((item,index) => {
        return(
          <span className='w-full'>{item.legal}</span>
        )
      })
    )
  }

  return (
    <div className='flex flex-col justify-center items- gap-3'>
      <span className=' w-full font-semibold'>Legal</span>
      <div className='flex w-full justify-center flex-col items-start gap-1'>
        {data()}
      </div>
      </div>
  )
}