import React,{useState} from 'react'
import { array3 } from '../../utils/data'
import {GoChevronDown,GoChevronUp} from "react-icons/go"
import { Ans,Ques,Ans1 } from '../../utils/interface'

export const FreqAskedQue = () => {
const [show,setShow] = useState<boolean>(false)
const [ans,setAns] = useState<Ans>({
  ans0 : false,
  ans1 : false,
  ans2 : false,
  ans3 : false,
  ans4 : false,
  ans5 : false,
  ans6 : false,
})

const [ans1,setAns1] = useState<Ans1>({
  ans7 : false,
  ans8 : false,
  ans9 : false,
  ans10 : false,
  ans11 : false,
  ans12 : false,
})
const keys = Object.keys(ans) as Array<keyof typeof ans> 
const keys1 = Object.keys(ans1) as Array<keyof typeof ans1> 

const quesAndAns = () => {
    return (
      array3.slice(0,7).map((data,index :number) => {
        return(
          <div className='w-full flex flex-col justify-center items-start rounded-xl border-2 p-3'>
            <div className='flex w-full justify-between gap-2'>
              <span className='font-black text-lg'>{data.question}</span>
              {!ans[keys[index]] ?
              <GoChevronDown onClick={() => setAns({...ans,[keys[index]] : ans[keys[index]]  === false ?true : false})} className='cursor-pointer'/> 
              :
             <GoChevronUp onClick={() => setAns({...ans,[keys[index]] : ans[keys[index]]  === false ?true : false})} className='cursor-pointer'/>}
             
            </div>
            {!ans[keys[index]] ? null : <span>{data.answer}</span>}
          </div>
        )
      })
    )
}

const quesAndAns1 = () => {
  return (
    array3.slice(7,13).map((data,index :number) => {
      return(
        <div className='w-full flex flex-col gap-3 justify-center items-start rounded-xl border-2 p-3'>
          <div className='flex w-full justify-between'>
            <span className='font-black text-lg'>{data.question}</span>
            {!ans1[keys1[index]] ?
            <GoChevronDown onClick={() => setAns1({...ans1,[keys1[index]] : ans1[keys1[index]]  === false ?true : false})} className='cursor-pointer'/> 
            :
           <GoChevronUp onClick={() => setAns1({...ans1,[keys1[index]] : ans1[keys1[index]]  === false ?true : false})} className='cursor-pointer'/>}
           
          </div>
          {!ans1[keys1[index]] ? null : <span>{data.answer}</span>}
        </div>
      )
    })
  )
}

  return (
    <div className='mt-[80px] flex flex-col justify-center items-center gap-14 p-16'>
      <span className='font-black text-lg lg:text-3xl sm:text-3xl md:text-3xl'>Frequnetly Asked Questions</span>
    <div className='flex flex-col-reverse md:flex-row lg:flex-row gap-2 justify-center items-start'>
      <div className='flex flex-col gap-5 justify-center items-center w-full md:w-1/2 lg:w-1/2'>
      {quesAndAns()}
      </div>
      <div className='flex flex-col gap-5 justify-start items-start w-full md:w-1/2 lg:w-1/2'>
      {quesAndAns1()}
      </div>
       
    </div>
    </div>
  )
  }


  // grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-3