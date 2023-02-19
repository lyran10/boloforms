import React from 'react'

export const AutomatedWorkflow = () => {
  const array1 = ["Leave Application","Purchase Order","Fulfilment"]
  const array2 = ["Approve","Reject","Send PDF"]

    const firstDiv = (array : string[]) => {
      return(
          array.map((item : string,index : number) => {
              return(
                <div className='w-5/6 h-[60px] bg-white rounded-xl px-4 flex flex-row items-center gap-2'>
                  <img src='https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg'/>
                <span className="text-gray-500 font-semibold ">
                  {item}
                  </span>
                </div>
              )
          })
      )
    }


  return (
    <div className='w-full mt-[50px] flex flex-col gap-16 justify-center items-center'>
      <div className='flex flex-col gap-8 w-5/6 border-2 p-3 rounded-lg'>
      <div className='flex flex-col justify-center items-center'>
      <span className='font-black text-lg text-center'>Fully Automated Workflow</span>
      <span className="pb-2 text-sm sm:text-xl text-center">No more painful manual approval management and wasting countless hours.</span>
      </div>

      <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-16 lg:justify-around md:justify-around'>
      <div className='relative w-[350px] h-[350px] bg-[linear-gradient(90deg,rgba(252,241,251,0),#f7dff5)] rounded-lg flex flex-col justify-center items-center gap-5 before:content-"" before:absolute before:w-16 before:h-[2px] before:bg-gray-200 before:rotate-90 before:-bottom-8 before:sm:-bottom-8 before:lg:-right-16 before:lg:top-[50%] before:lg:rotate-[0] before:md:-right-16 before:md:rotate-[0] before:md:top-[50%]'>
        {firstDiv(array1)}
      </div>
      <img className='w-36 lg:ml-8 md:ml-8' src="https://www.boloforms.com/_next/static/media/approvals.73c8d904.svg" alt="" />

      <div className='relative w-[350px] h-[350px] bg-[linear-gradient(270deg,rgba(236,243,255,0),#ecf3ff)] rounded-lg flex flex-col justify-center items-center gap-5 before:content-"" before:absolute before:w-16 before:h-[2px] before:bg-gray-200 before:rotate-90 before:-top-8 before:xs:-bottom-8 before:sm:-bottom-8 before:lg:-right-24 before:lg:top-[50%] before:lg:rotate-[0] before:md:-left-16 before:md:rotate-[0] before:md:-right-24 before:md:top-[50%]'>
        {firstDiv(array2)}
      </div>
      </div>
      <span className="pt-2 text-sm lg:text-xl md:text-xl text-center">BoloForms workflows acts as a glue holding together all your approval processes.</span>
      </div>
     
    </div>
  )
}
