import React from 'react'
import { dropDownList } from '../../utils/data'

export const DropDownList = () => {

    const data = () => {
        return(
          dropDownList.map((item,index) => {
              return(
                <li key={index} className='flex items-start justify-start gap-4'>
                <img className='w-5 mt-1' src={item.img} alt="" />
                  <div className='flex flex-col gap-2'>
                  <span className='font-bold text-base'>{item.header}</span>
                  <span className='text-sm'>{item.line}</span>
                  </div>
                </li>
              )
          })
        )
    }

  return (
    <ul className='flex flex-col p-5 gap-5'>
      {data()}
    </ul>
  )
}