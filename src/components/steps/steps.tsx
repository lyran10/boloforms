import React from 'react'

export const BoloformsWork = () => {
  return (
    <div className='mt-[100px] flex gap-10 flex-col justify-center items-center'>
      <span className='font-semibold text-md lg:text-3xl sm:text-3xl md:text-3xl tracking-wide' >How does BoloForms work?</span>
      <div className='flex flex-col md:flex-col lg:flex-row'>
        <div className='flex flex-col md:flex-col-reverse lg:flex-col-reverse gap-3 px-2'>
          <div className='flex justify-center text-center text-sm items-center flex-col gap-1'>
          <span className='font-extrabold text-lg lg:text-3xl sm:text-3xl md:text-3xl tracking-wide' >Step 1:</span>
          <span>Choose a template or add questions to create your own Google form</span>
          </div>
          <img src="https://www.boloforms.com/_next/static/media/2.2709e204.svg" alt="" />
        </div>

        <div className='flex flex-col md:flex-col-reverse lg:flex-col-reverse gap-3 px-2'>
          <div className='flex justify-center text-center text-sm items-center flex-col gap-1'>
          <span className='font-extrabold text-lg lg:text-3xl sm:text-3xl md:text-3xl tracking-wide' >Step 2:</span>
          <span>Enable single/multi step approval and add necessary approvers!</span>
          </div>
          <img src="https://www.boloforms.com/_next/static/media/1.b2cc23b0.svg" alt="" />
        </div>
        <div className='flex flex-col md:flex-col-reverse lg:flex-col-reverse gap-3 px-2'>
          <div className='flex justify-center text-center text-sm items-center flex-col gap-1'>
          <span className='font-extrabold text-lg lg:text-3xl sm:text-3xl md:text-3xl tracking-wide' >Step 3:</span>
          <span>Now you can enable the workflow and share the Google form</span>
          </div>
          <img src="https://www.boloforms.com/_next/static/media/3.1a7ec00e.svg" alt="" />
        </div>
      </div>

      </div>
  )
}