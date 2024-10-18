import React from 'react'
import Image from './layouts/Image'
import Line from '../assets/icons/Line.svg'
import Headding from './layouts/Headding'
import RecenrProjectCard from './layouts/RecenrProjectCard'
import Button from './layouts/Button'
import HeadingH4 from './layouts/HeadingH4'
import Slider from "react-slick";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";  

const RecentProject = () => {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button className=''><GoArrowLeft className='z-50 h-7 w-8 shadow-2xl hover:bg-ButtonBg border absolute top-[-350px] right-[60px]'/></button>,
    prevArrow: <button className=''><GoArrowRight className='z-50 h-7 w-8 shadow-2xl hover:bg-ButtonBg  border absolute top-[-350px] left-[1050px]'/></button>
  };
  return (
    <section className='w-container mx-auto py-[50px] relative'>

      <div className="flex ">
        <Image src={Line} />
        <HeadingH4 text='Recent Projects' className='pl-5' />
      </div>
      <div className="">
        <Headding text='My Recent Projects' className='text-[50px]' />
      </div>



      <Slider {...settings} className="flex justify-between mt-8 pb-16">
        <RecenrProjectCard />
        <RecenrProjectCard />
        <RecenrProjectCard />
        <RecenrProjectCard />
      </Slider>
      <Button text='Explore More' className='flex justify-center ml-[530px]'/>
    </section>
  )
}

export default RecentProject