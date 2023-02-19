import React from 'react'

export const Guarantee = () => {
  return (
    <div className='w-full flex flex-col gap-10 justify-center items-center'>
    <div className='flex flex-col shadow-custom overflow-hidden justify-start items-start p-5 rounded-3xl bg-white gap-5 w-5/6 '>
      <img className='w-14 self-start' src="https://www.boloforms.com/_next/static/media/moneyback-gurantee.8417d885.png" alt="" />
      <span className="text-sm sm:text-base mb-3 font-semibold text-gray-600">MY 100% NO-RISK DOUBLE-GUARANTEE</span>
      <span className="text-sm sm:text-base">Here's why I'm offering this -</span>
      <span className="text-sm sm:text-base">I have seen the power of automating your business workflows. Take some
          time out of your busy schedule today and see what all things can be
          automated in your workflows.</span>
          <span className="text-sm sm:text-base">You will find that most of your time is going in doing things that could be done better by automating. You just have to give it a shot!</span>
          <span className="text-sm sm:text-base">Start with automating small workflow and then gradually you will love
          it!!</span>
          <span className="text-sm sm:text-base">Thank you, and I hope we'll get the opportunity to be a part of your
          growth journey soon!</span>
          <div className='flex flex-col top-10 gap-3'>
            <img className='w-52 -translate-x-8 translate-y-6' src="https://www.boloforms.com/_next/static/media/paresh-signature.ffbb67b9.png" alt="" />
            <div className='flex flex-col gap-1'>
            <span className="font-semibold">Paresh Deshmukh</span>
            <span className="text-xs font-semibold">Co-Founder BoloForms</span>
            </div>
          </div>
    </div>
  </div>
  )
}


