import React,{useState} from 'react'
import { Hamburger } from './hamburger'
import { Menu } from './menu'
import { NavList } from './navList'

export const Nav = () => {
  const [showMenu,setShowMenu] = useState<string>("opacity-0")
  const [translateMenu,setTranslateMenu] = useState<string>("translate-x-[1800px]")

  return (
    <nav className='fixed z-[100] h-20 bg-[rgba(250,250,250,.95)] w-full flex justify-around items-center p-3'>
      <div className='flex gap-5' >
      <img src="https://www.boloforms.com/_next/static/media/logo-text.e6f7617c.svg" alt="" className='h-28' />
        <NavList/>
        </div>
      <Hamburger translateMenu={translateMenu} setTranslateMenu={setTranslateMenu} setShowMenu={setShowMenu} showMenu={showMenu}/>
     
      <div className='hidden lg:flex mg:flex justify-center items-center gap-5'>
         <button className={`transition duration-500 p-2 px-5 rounded-md text-[#915bff] w-[150px] border-2 border-[#915bff] hover:text-white hover:bg-[#915bff]`}>Install Now</button>
         <button className={`flex gap-2 l p-2 px-5 justify-center items-center rounded-md text-white bg-[#915bff] border-2 border-[#915bff] hover:opacity-80`}>
      BoloForms Premium
      </button>
         </div>
  
      <Menu showMenu={showMenu} translateMenu={translateMenu}/>
    </nav>
  )
}