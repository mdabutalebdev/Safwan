import React from 'react'
import Image from './layouts/Image'
import Line from '../assets/icons/Line.svg'
import Headding from './layouts/Headding'
import HeadingH4 from './layouts/HeadingH4'
import Button from './layouts/Button'

const Contact = () => {
  return (
     <section className='w-container mx-auto flex gap-x-5 py-[50px]'>
          <div className="h-[586px] w-[470px] bg-teal-100">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233738.90505383417!2d90.0941890867187!3d23.741302499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1727747435263!5m2!1sen!2sbd"  className='w-full h-full'></iframe>
          </div>
          <div className="mt-16">
                 
                <div className="flex ">
                    <Image src={Line} />
                    <HeadingH4 text='Get In Touch' className='pl-5 text-lg' />
                </div>
                <div className="">
                    <Headding text='Feel Free to Contact' className='text-[40px] font-normal' />
                </div>
                <div className="mt-10">
                    <input type="text" placeholder='Enter Name' className='border-b border-1'/>
                    <input type="Email" placeholder='Enter Email' className='border-b border-1 ml-10'/> 
                </div>
                <div className="mt-16">
                    <input type="Number" placeholder='Enter Number' className='border-b border-1'/>
                    <input type="text" placeholder='Subject' className='border-b border-1 ml-10'/> 
                </div>
                <div className="mt-16 w-full mb-16">
                    <input type="text" placeholder='Enter Subject' className='border-b border-1 w-full'/>
                     
                </div>
                <Button text={`Contact Us`}/>

          </div>
     </section>
  )
}

export default Contact