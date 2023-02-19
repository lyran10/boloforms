import React from 'react'
import { box2 } from '../../utils/data'

export const Box2 = () => {

  const data = () => {
    return (
      box2.map((item,index) => {
        return(
          <span className='w-full' key={index}>{item.page}</span>
        )
      })
    )
  }

  return (
    <div className='flex flex-col justify-start items-start gap-3'>
      <span className='w-full font-semibold'>Pages</span>
      <div className='flex w-full justify-start flex-col items-start gap-1'>
        {data()}
      </div>
      </div>
  )
}

