import React from 'react'
import { Premium } from '../buttons/premium'
import {IoRocketSharp} from "react-icons/io5"
import { ColorBoxes } from './colorBoxes'

export const Platform = () => {
  return (
    <div className='p-5 flex flex-col gap-10 sm:flex-col md:flex-col lg:flex-row w-full'>
      <div className='w-full sm:w-full md:w-full lg:w-1/2'>
        <ColorBoxes/>
      </div>
      <div className="lg:w-1/2 justify-center items-center md:w-full sm:w-full xs:w-full flex gap-10 flex-col">
        <div className='flex flex-col justify-center items-center gap-2 xs:pr-0 sm:pr-0 lg:pr-28 md:pr-0'>
        <span style={{lineHeight:"50px"}} className='text-3xl sm:text-4xl font-semibold mb-4 capitalize'>An end-to-end workflow platform for all your business needs</span>
          <span>An End-to-End Workflow Platform For all Your Business Needs
          1000+ companies-from Startups to Fortune 500s use BoloForms Approvals
          to build and manage business processes across departments.</span>
          </div>
          <div className='self-start'>
          {<Premium width="w-[200px]" bg="bg-[#915bff]" text="text-white" icon={<IoRocketSharp/>}/>}
          </div>
          
      </div>
    </div>
  )
}