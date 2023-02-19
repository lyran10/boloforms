import React from 'react'
import {GoChevronDown} from "react-icons/go"

export const NavList = () => {
  return (
    <ul className=' hidden lg:flex mg:flex gap-5 text-bold justify-center items-center'>
      <li className='flex gap-1 justify-center items-center'>
         Products
        <GoChevronDown className='cursor-pointer'/>
      </li>
      <li className='cursor-pointer'>Pricing</li>
      <li className='cursor-pointer'>Guides</li>
      <li className='cursor-pointer'>Template</li>
      </ul>
  )
}