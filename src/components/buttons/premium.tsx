import React from 'react'
import { Width } from '../../utils/interface'

export const Premium = ({width,padding,text,font,tracking,gap,content,icon,bg} : Width) => {
  return (
    <button className={`flex gap-2 lg:p-3 md:p-3 lg:w-[300px] md:w-[300px] p-2 justify-center items-center rounded-md ${width} ${text} ${bg} border-2 border-[#915bff] text-sm md:text-lg lg:text-lg hover:opacity-80`}>
      {icon}
      BoloForms Premium
      </button>
  )
}
