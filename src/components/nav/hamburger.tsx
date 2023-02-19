import React,{useState} from 'react'
import { Ham } from '../../utils/interface'

export const Hamburger = ({setShowMenu,showMenu,translateMenu,setTranslateMenu} : Ham) => {
  const [hamAnimationDiv1,setHamAnimationDiv1] = useState<string>("")
  const [hamAnimationDiv2,setHamAnimationDiv2] = useState<string>("")
  const [hamAnimationDiv3,setHamAnimationDiv3] = useState<string>("")

  const animation1 = () => {
    setTimeout(() => {showMenu === "opacity-0" ?setShowMenu("") :setShowMenu("opacity-0")},400)
    translateMenu === "translate-x-[1800px]" &&  showMenu === "opacity-0"?setTranslateMenu("")  : setTranslateMenu("translate-x-[1800px]")
  }

  const animation2 = () => {
    setTimeout(() => {
      translateMenu === "translate-x-[1800px]" &&  showMenu === "opacity-0"?setTranslateMenu("")  : setTranslateMenu("translate-x-[1800px]")
    },400)
    showMenu === "opacity-0" ?setShowMenu("") :setShowMenu("opacity-0")
  }

  const hamburger = () => {
    showMenu === "opacity-0" ? animation1() : animation2()
      hamAnimationDiv1 === "rotate-45 translate-y-2" ? setHamAnimationDiv1("") :setHamAnimationDiv1("rotate-45 translate-y-2")
      hamAnimationDiv2 === "-rotate-45 -translate-y-2 " ? setHamAnimationDiv2("") :setHamAnimationDiv2("-rotate-45 -translate-y-2 ")
      hamAnimationDiv3 === "-translate-x-10 opacity-0" ? setHamAnimationDiv3("") :setHamAnimationDiv3("-translate-x-10 opacity-0")
  }

  return (
    <div onClick={() => hamburger()} className='group flex flex-col gap-1 cursor-pointer sm:flex md:flex lg:hidden'>
                <div className={`w-7 h-1 rounded-md bg-black transition duration-500 ${hamAnimationDiv1}`}></div>

                <div className={`w-7 h-1 rounded-md bg-black transition duration-500 ${hamAnimationDiv3}`}></div>

                <div className={`w-7 h-1 rounded-md bg-black transition duration-500 ${hamAnimationDiv2}`}></div>
          </div>
  )
}