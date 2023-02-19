import React from 'react'
import { box3 } from '../../utils/data'

export const Box3 = () => {

  const data = () => {
    return (
      box3.map((item,index) => {
        return(
          <span className='w-full'>{item.product}</span>
        )
      })
    )
  }

  return (
    <div className='flex flex-col justify-start items-start gap-3'>
      <span className='font-semibold w-full'>Products</span>
      <div className='flex w-full justify-start flex-col items-start gap-1'>
        {data()}
      </div>
      </div>
  )
}