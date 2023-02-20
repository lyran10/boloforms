import React,{useState} from 'react'
import {AiFillQuestionCircle} from "react-icons/ai"
import {IoRocketSharp} from "react-icons/io5"
import {BiSupport} from "react-icons/bi"
import {SiHandshake} from "react-icons/si"
import { dot } from '../../utils/data'

export const Dots = () => {
  const [show,setShow] = useState<boolean>(false)

  const hover = (num : number) => {
        setShow(true)
        setTimeout(() => {setShow(false)},num)
  }

  const data = () => {
    return(
      dot.map((item,index) => {
          return(
              <div key={index} className='flex group w-full'>
                <a onMouseLeave={() => {hover(50)}} className={`group transition-[width,height,spacing] w-0 h-0 duration-200 flex hover:bg-[#915bff] bg-gray-300 hover:w-[200px] delay-100 hover:h-10 rounded-full text-sm p-[7px] justify-center items-center text-white gap-2`} href="">
                <span className={`mb-1 invisible group-hover:visible transition-[opacity] opacity-0 group-hover:opacity-[1] duration-200 delay-300`}>{item.icon}</span>
                <p className= {`invisible group-hover:visible transition-[opacity] opacity-0 group-hover:opacity-[1] duration-200 delay-300`}>{item.header}</p>
                </a>
               
              </div>

          )
      })
    )
  }

  return (
    <div className='fixed flex-col gap-10 h-[200px] top-[50%] left-5 hidden lg:flex md:flex'>
      {data()}
    </div>
  )
}