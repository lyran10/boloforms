import React from 'react'
import { Install } from '../buttons/install'
import {IoRocketSharp} from "react-icons/io5"

export const Home = () => {
  return (
    <div className='lg:mt-[100px] md:mt-[50px] gap-5 mt-0 transition duration-500 xs:w-full sm:w-full md:w-5/6 lg:w-5/6 xs:h-auto sm:h-auto md:h-auto lg:h-[600px] flex flex-col md:flex-row lg:flex-row p-5'>
      <div className='mt-[80px] flex flex-col gap-5 xs:full sm:full md:w-full lg:w-1/2 lg:pr-16'>
      <span style={{lineHeight :"55px"}} className='text-3xl md:text-4xl lg:text-4xl font-semibold'>Transform Google Forms Into Interactive Workflows</span>
      <span className='leading-7 text-base lg:text-lg'>
        BoloForms is a google forms add on that allows you to add conditional logics to your forms. With BoloForms you can create interactive workflow, approval flows & automate processes.
      </span>
     <Install width="w-[300px]" padding="p-3" text="text-xl" font="font-bold" tracking="tracking-wide" gap="gap-5" icon={<IoRocketSharp/>}/>
      </div>
      <div className='mt-[80px] flex xs:justify-center sm:justify-center md:justify-start lg:justify-start items-center lg:w-1/2 md:w-full
       sm:w-full xs:w-full'>
      <iframe className='rounded-md w-full sm:w-full md:w-full lg:w-11/12 h-[320px]'  src="https://www.youtube.com/embed/NRFz_TNch6Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
      </div>
  )
}



