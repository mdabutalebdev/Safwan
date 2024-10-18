import React from 'react'
import Image from './layouts/Image'
import Man from '../assets/images/man.jpg'
import Here_One from '../assets/images/Here_one.jpg'
import Here_Two from '../assets/images/Here_two.jpg'
import Headding from './layouts/Headding'
import Line from '../assets/icons/Line.svg'
import Button from './layouts/Button'
import HeadingH4 from './layouts/HeadingH4'


const AboutMe = () => {
  return (
     <section className='py-[50px] w-container mx-auto flex gap-x-10'>
              <div className="flex gap-8 w-[50%]">
                    <div className="flex">
                        <Image src={Man} className='h-[480px] w-[370px]'/> 
                    </div>
                    <div className="">
                    <Image src={Here_One} className='h-[225px] w-[170px] mb-8'/>
                    <Image src={Here_Two} className='h-[225px] w-[170px]'/>
                    </div>
                  
                    
              </div>
              <div className="w-[50%]">
                    <div className="flex ">
                         <Image src={Line}/>
                         <HeadingH4 text='About Me' className='pl-5'/> 
                    </div>
                    <div className="">
                        <Headding text='I Enjoy Solving Problems with Scalable Solutions' className='text-[50px]'/>
                        <p className='leading-7 font-Jost text-PrimaryColor text-xl font-light pb-5'>Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
                            aeci velit, sed quia non numquam eius modi tempora incidunt lao
                            magnam aliquam quaerat voluptatem reprehenderit.</p>
                         <p className='leading-7 font-Jost text-PrimaryColor text-xl font-light pb-11'>Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
                         reprehenderit non numquam eius.</p>

                         <Button text='Download CV'/>
                    </div>
              </div>
     </section>
  )
}

export default AboutMe