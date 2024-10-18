import React from 'react'
import Image  from '../layouts/Image'
import ProjectImg from '../../assets/images/recent_one.jpg'
import Headding from './Headding'
import { GoArrowRight } from "react-icons/go";


const RecenrProjectCard = () => {
  return (
    
    <div className='h-[500px] w-[360px] shadow-2xl  relative rounded-md'>
           <Image src={ProjectImg} className='h-[270px] w-[360px] mt-1'/>
           <Headding text='Analytics, UI-Ux' className='font-Vollkorn text-ButtonBg text-base font-medium pl-5'/>
           <Headding text='Branding & Digital Video Campaign For George’s Cafe' className='font-Vollkorn text-PrimaryColor text-2xl font-medium leading-8 pl-5'/>
            <p className='leading-7 font-Jost text-PrimaryColor text-xl font-light pl-5'>Lorem Ipsum Is Simply Dummy Text Of The
            Printing And Typesetting Industry.</p>
           <div className="flex">
            <Headding text='View Case Studies' className='font-Jost text-lg	font-medium group-hover:text-ButtonBg pl-5 '/> 
            <GoArrowRight className='h-5 w-[100px] mt-[150px] group-hover:text-ButtonBg absolute top-[268px] left-[140px]'/>
            </div>
            
    </div>
  )
}

export default RecenrProjectCard