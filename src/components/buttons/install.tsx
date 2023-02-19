import React from 'react'

import {IoRocketSharp} from "react-icons/io5"
import { Width } from '../../utils/interface'

export const Install = ({width,padding,text,font,tracking,gap,icon} : Width) => {
  return (
    <button className={`${padding} lg:p-3 md:p-3 lg:w-[300px] md:w-[300px] flex justify-center items-center ${gap} rounded-md  xs:w-full4 sm:w-full ${tracking} md:${width} lg:${width} text-white ${font} ${text} bg-[#915bff] border-2 border-[#915bff] text-sm md:text-lg lg:text-lg hover:opacity-80`}>
        {icon}
        INSTALL FOR FREE
        </button>
  )
}