import React from 'react'
import {TiTick} from "react-icons/ti"

export const Trusted = () => {
  return (
    <div className='flex gap-2 text-xs sm:flex-col flex-col md:flex-row lg:flex-row'>
      <span className='flex justify-center items-center gap-1'>
      <TiTick size={20} className='text-green-600'/>
      Trusted by 50000+ businesses
      </span>
      <span className='flex justify-center items-center gap-1'>
      <TiTick size={20} className='text-green-600'/>
      30 days money back guarantee
      </span>
      <span className='flex justify-center items-center gap-1'>
      <TiTick size={20} className='text-green-600'/>
      1-1 Zooom & Whatsapp onboarding
      </span>
    </div>
  )
}
