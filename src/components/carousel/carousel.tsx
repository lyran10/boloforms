import React,{useEffect,useState} from 'react'

export const Carousel = () => {
  const [curr,setCurr] = useState<number>(0)
  let images = [
    "https://www.boloforms.com/_next/static/media/1.890362c3.svg",
    "https://www.boloforms.com/_next/static/media/2.0b0df285.svg",
    "https://www.boloforms.com/_next/static/media/3.8cf4b5f3.svg",
    "https://www.boloforms.com/_next/static/media/4.b84353dc.svg",
    "https://www.boloforms.com/_next/static/media/5.9b049047.svg" 
  ]

  const next = () => {
    setCurr(curr => curr === (images.length + 10) - 1? 0 : curr+1)
  }

  useEffect(() => {
      const interval = setInterval(next,1000)
     return () => clearInterval(interval)
  },[])

  return (
    <div className='mt-[50px] flex p-3 gap-[100px] w-5/6 flex-col justify-center items-center overflow-hidden'>
      <span className='font-semibold text-md lg:text-3xl sm:text-3xl md:text-3xl tracking-wide'>BoloForms is user by</span>
      <div style={{transform: `translateX(-${curr*100}px)`}} className='flex transition duration-500 ml-[1100px] sm:ml-[800px] md:ml-[600px] lg:ml-[600px]'>
        {images.map((img,index) => {
          return(
            <div key={index} className='border border-slate-200 rounded-xl mr-6 w-[250px] h-[250px] p-4'>
                  <img src={img} alt="" />
          </div>
          )
        })}
      </div>
    </div>
  )
}