import React from 'react'
import Image from '../layouts/Image'
import UiIcon from '../../assets/icons/Vector.png'
import Headding from './Headding'
import { GoArrowRight } from "react-icons/go";

const ServiceCard = () => {
  return (
    <div className='h-[354px] w-[370px] rounded-2xl shadow-2xl relative mt-11 group'>
        <Image src={UiIcon} className='h-[68px] w-[68px] ml-7 mb-6'/>
        <Headding text='Ui/Ux Design' className='font-extrabold text-2xl pl-7'/>
        <p className='font-Jost text-PrimaryColor text-xl font-normal px-5 absolute top-[140px] left-[8px] group-hover:text-h4Color group-hover:font-medium'>Dolor repellendus tempo ribus aue
            quibusdam offi ciis debitis rerum na
            aibus minima veniam.
        </p>
        <GoArrowRight className='h-5 w-[100px] mt-[150px] group-hover:text-ButtonBg'/>
    </div>
  )
}

export default ServiceCard