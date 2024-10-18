import React from 'react'
import Image from './layouts/Image'
import FooterLogo from '../assets/images/footer_logo.png'
import List from "./layouts/List";
import Behance from '../assets/icons/behance.png'
import Insta from '../assets/icons/insta.png'
import Outline from '../assets/icons/outlined.png'

const Footer = () => {
   const foterLi = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"]

   return (
      <section className='bg-PrimaryColor  mx-auto py-[50px] h-[475px]'>
         <div className="">
            <Image src={FooterLogo} className='mx-auto' />
         </div>

         <div className="pt-14">
            <ul className="flex justify-center text-white font-normal">
               {
                  foterLi.map((el, index) => {
                     return (
                        <li key={index}>
                           <a href={`#`} className={`text-white font-Jost font-medium text-lg  duration-500 cursor-pointer`}>
                              {el}
                           </a>

                           {foterLi.at(-1) == el ? "" : <span className='px-[0.6vw] text-slate-500'>|</span>}
                        </li>

                     )
                  })
               }
            </ul>
         </div>
         <div className="flex justify-center	 gap-x-5 ml-10 mt-10">
            <button className='bg-ButtonBg rounded-full h-[50px] w-[50px]'> <Image src={Behance} className={`pl-3`}/></button>
            <button className='bg-ButtonBg rounded-full h-[50px] w-[50px]'> <Image src={Insta} className={`pl-2`}/></button>
            <button className='bg-ButtonBg rounded-full h-[50px] w-[50px]'>  <Image src={Outline} className={`pl-2`}/></button>

         </div>
         <div className="border-b-1 bg-slate-500 h-[1px] mt-[100px]">
              <p className='text-center text-white pt-10'>Copyright © 2023 Design By Estiak. All rights reserved.</p>
         </div>
      </section>
   )
}

export default Footer