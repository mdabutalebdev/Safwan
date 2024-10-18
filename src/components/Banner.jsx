import React from 'react'
import Image from './layouts/Image'
import Shape from '../assets/images/shape.png'
import Man from '../assets/images/man.jpg'
import Button from "./layouts/Button";

const Banner = () => {
  return (
    <section className='h-[850px] bg-PrimaryColor'>
       
           <div className="">
              <Image src={Shape}/>
           </div>
      <div className="relative">
          <div className="">

            <div className="absolute top-[-460px] left-[400px] z-40">
                  <h1 className='font-Vollkorn text-white text-8xl font-bold'>Hello!</h1>
                  <h2 className='font-Vollkorn text-white text-8xl font-bold'>I’m Zarror Nibors</h2>
                  <p className='font-Jost text-white text-xl font-normal  absulate top-[-400px] left-0 leading-8 pb-9'>I’am freelance UI/UX Desogner based in Indonesia who loves to craft attractive <br />design experiences for the web.</p>
                  <Button text='Contact Me' className=''/>
            </div>
            <div className="absolute top-[-653px] right-0">
                <Image src={Man}/>
            </div>

        </div>
          </div>
    </section>
  )
}

export default Banner
 
