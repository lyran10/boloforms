import React from 'react'
import { Cards } from './cards'

export const AwardWinning = () => {
  return (
    <div className=' mt-[80px] flex flex-col justify-center items-center gap-5 full'>
        <img className='w-52' src="https://www.boloforms.com/_next/static/media/stars.6ce54309.png"alt="" />
        <span className="text-center text-3xl sm:text-5xl font-bold mb-4">Award-winning support<span className="text-[#9C6CFF]">.</span></span>
        <span className="text-center text-base sm:text-xl">Best-in-class support. We’re always here to help – here’s how to connect.</span>
        <Cards/>
    </div>
  )
}