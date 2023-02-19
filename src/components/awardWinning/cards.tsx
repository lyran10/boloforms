import React from 'react'
import { Award } from '../../utils/interface'
import { array2 } from '../../utils/data'

export const Cards = () => {
  
const card = () => {
  return(
    array2.map((data : Award,index: number) => {
        return(
          <div key={index} className='flex flex-col gap-5 justify-center items-center w-full shadow-custom p-5 rounded-lg'>
            <img className='' src={data.img} alt="" />
            <div className='flex  justify-center items-start gap-2 flex-col'>
            <span className='font-black text-2xl '>{data.header}</span>
            <span>{data.content}</span>
            </div>
            <button className='self-center text-sm p-1 font-bold px-10 rounded-xl border-2 border-[#915bff]'>{data.btncontent}</button>
          </div>
        )
    })
  )
}

  return (
    <div className='grid w-5/6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center items-center'>
          {card()}
    </div>
  )
}