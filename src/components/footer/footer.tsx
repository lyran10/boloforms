import React from 'react'
import { Box1 } from './box1'
import { Box2 } from './box2'
import { Box3 } from './box3'
import { Box4 } from './box4'
import {FaTwitter,FaFacebook,FaYoutube} from "react-icons/fa"

export const Footer = () => {
  return (
    <div className='bg-gray-50 p-10 w-full flex flex-col gap-5 justify-center items-center'>
      <div className='grid gap-5 grid-cols-1 sm:grid-cols-2   lg:w-5/6 md:w-5/6 sm:w-5/6 md:grid-cols-3 lg:grid-cols-4 justify-center items-start'>
        <Box1/>
        <Box2/>
        <Box3/>
        <Box4/>
      </div>
          <span className='flex xs:text-center sm:text-center lg:w-5/6 md:w-5/6 text-sm gap-4'>
            Made with <img className='w-3' src="https://www.boloforms.com/_next/static/media/1f525.a7bd71d6.svg" alt="" /> + <img className='w-3' src="https://www.boloforms.com/_next/static/media/2764.8838f014.svg" alt="" /> in India
          </span>
          <div className='flex gap-2 flex-col justify-center xs:items-center sm:items-start lg:items-end md:items-end lg:w-5/6 md:w-5/6 '>
          <span className='w-[150px] xs:text-center sm:text-center md:text-end lg:text-end'>Select Language</span>
          <select className='lg:w-[150px] md:w-[150px] sm:w-full xs:w-full sm:self-center xs:self-center md:self-end lg:self-end'>
            <option>Select</option>
            <option>Hebrew</option>
            <option>Hindi</option>
            <option>English</option>
          </select>
          </div>
          <div className='flex gap-5 text-gray-600 '>
          < FaTwitter size={25}/>
          < FaYoutube size={25}/>
         < FaFacebook size={25}/>
          </div>
    </div>
  )
}

// https://www.boloforms.com/_next/static/media/2764.8838f014.svg
// https://www.boloforms.com/_next/static/media/1f525.a7bd71d6.svg