import React from 'react'
import { Show } from '../../utils/interface'
import { Premium } from '../buttons/premium'
import { List } from './list'

export const Menu = ({showMenu,translateMenu} : Show) => {
  return (
    <div className={`h-screen flex flex-col gap-10 w-full bg-[#f1f4f6] absolute right-0 left-0 top-20 bottom-0 ${showMenu} ${translateMenu} transition duration-500`} >
         <List/>
         <div className='px-3 flex justify-center flex-col items-center gap-5'>
         <button className={`transition duration-500 p-2 rounded-md text-[#915bff] w-full border-2 border-[#915bff] hover:text-white hover:bg-[#915bff]`}>Install Now</button>
          <Premium width="w-full" text="text-white" bg='bg-[#915bff]'/>
         </div>
    </div>
  )
}