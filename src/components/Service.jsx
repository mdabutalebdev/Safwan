import React from 'react'
import Image from './layouts/Image'
import Line from '../assets/icons/Line.svg'
import Headding from './layouts/Headding'
import Bulet from '../assets/images/bulet.png'
import ServiceCard from './layouts/ServiceCard'
import HeadingH4 from './layouts/HeadingH4'

const Service = () => {
  return (
    <section className='w-Bannnercontainer mx-auto py-[60px] bg-white'>
        <div className="flex justify-center">
           <Image src={Line}/>
           <HeadingH4 text='MY SERVICES' className='pl-5'/>
        </div>

        <div className="flex justify-center">
           <Headding text='Provide Wide Range of Digital Services' className='text-[50px] pl-[720px] pr-[630px] leading-[60px] text-center'/>
        </div>
        <div className="relative">
          <Image src={Bulet} className='absolute top-0 left-[150px]'/>
        </div>

        {/* card part */}
        <div className="w-container mx-auto flex gap-8">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        </div>
          
    </section>
  )
}

export default Service