import React from 'react'
import { Nav } from '../components/nav/nav'
import { Home } from '../components/home/home'
import {Carousel} from "../components/carousel/carousel"
import { BoloformsWork } from '../components/steps/steps'
import { Comment } from '../components/comment/comment'
import { Features } from '../components/features/features'
import { Trusted } from '../components/trusted/trusted'
import { Install } from '../components/buttons/install'
import { Premium } from '../components/buttons/premium'
import {FaCloudDownloadAlt} from "react-icons/fa"
import {IoRocketSharp} from "react-icons/io5"
import { Platform } from '../components/platform/platform'
import { PattrickComm } from '../components/comment/pattrickComm'
import { AutomatedWorkflow } from '../components/automatedWorflow/automatedWorkflow'
import { Guarantee } from '../components/guarantee/guarantee'
import { AwardWinning } from '../components/awardWinning/awardWinning'
import { FreqAskedQue } from '../components/FreqAskedQue/freqAskedQue'
import { TrustingCustomers } from '../components/trustingCustomers/trustingCustomers'
import { Footer } from '../components/footer/footer'

export const Index = () => {
  return (
    <main className='flex flex-col items-center bg-white transition duration-500'>
        <Nav/>
        <Home/>
        <Carousel/>
        <BoloformsWork/>

        <Comment comp1={<Trusted/>} comp2={ <Install width="w-[200px]" icon={<FaCloudDownloadAlt/>} padding='p-2' gap="gap-2"/>} comp3={<Premium width="w-[200px]" bg="bg-white" text="text-[#915bff]" icon={<IoRocketSharp/>}/>} width="https://www.boloforms.com/_next/static/media/repa.483a1471.jpeg" content=' "BoloForms has been an absolute lifesaver for me. It makes workflow tasks much easier and helps to ensure the everything runs smoothly. I love how it automates tasks and eliminate manual processess, saving me time and effort. It"s a great Google Workflow software and is well worth the money!"' name="Repa Mandala"/>

        <Features/>

        <Comment comp1={<Trusted/>} comp2={ <Install width="w-[200px]" icon={<FaCloudDownloadAlt/>} padding='p-2' gap="gap-2"/>} comp3={<Premium width="w-[200px]" bg="bg-white" text="text-[#915bff]" icon={<IoRocketSharp/>}/>} width="url(https://www.boloforms.com/_next/static/media/alaa.a9f02030.jpeg)" content=' "Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it"s incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!"' name="Alaa Khaled"/>

        <Comment width="https://www.boloforms.com/_next/static/media/deepak.e041dab0.jpeg" content=' "Easy to use interface and timely support...looking for more features"' name="Deepak S (Solero Corporation)"/>

        <Platform/>
        <PattrickComm/>
        <AutomatedWorkflow/>

        <Comment comp1={<Trusted/>} comp2={ <Install width="w-[200px]" icon={<FaCloudDownloadAlt/>} padding='p-2' gap="gap-2"/>} comp3={<Premium width="w-[200px]" bg="bg-white" text="text-[#915bff]" icon={<IoRocketSharp/>}/>} width="raman" content=' "I recently started using Boloforms for my Google Forms and it has been an absolute game-changer. The software is intuitive and user friendly, so I was able to set up my forms quickly &amp; easily. It also provides powerful analytics to understand and act on the data collected from my forms in real-time. Overall, it"s been a great experience using Boloforms and I highly recommend it!"' name="Raman R"/>

        <Comment width="https://www.boloforms.com/_next/static/media/john.39efe227.jpeg" content=' "Customer support is super awesome, Great add on for our team! This helps our task management must easier. I can easily keep track of my member"s request and work progress. The approval process is smooth and extremely quick. I highly recommend this addon especially for small business like mine."' name="John M"/>

        <Guarantee/>
        <AwardWinning/>
        <FreqAskedQue/>
        <TrustingCustomers/>
        <Footer/>
    </main>
  )
}