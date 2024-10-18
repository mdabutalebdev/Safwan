import React, { useState } from 'react'
import Image from './layouts/Image'
import Line from '../assets/icons/Line.svg'
import Headding from './layouts/Headding'
import List from './layouts/List'
import WorkExampleCard from './layouts/WorkExampleCard'
import HeadingH4 from './layouts/HeadingH4'
import WorkProduct from '../../public/WorkProduct.json'




const WorkExample = () => {


   const [newarry, setnewarry] = useState(WorkProduct)  // This state for json file . when the page load first time show this array
   //return all categories based on repeat data
   const product = WorkProduct.map((item) => {
      return item.catagory
   })

   const list = product.filter((element, index, arry) => {
      console.log(arry);
      return arry.indexOf(element) === index
   }) //skip repeated data and return single value



   const rohim = (items, index) => {
      if (items == "All") {
         setnewarry(WorkProduct)
      }

      setactive(index)
      const update = WorkProduct.filter((el) => {    //retuen select category
         return el.catagory == items
      })
      setnewarry(update)
   }
   //button part
   const [active, setactive] = useState(0)
   const handleActive = () => {

      if (active == product.length - 1) {
         setactive(0)
      }
      else {
         setactive(active + 1)
      }
      console.log(active)
   }
   //button end



   return (
      <section className='w-container mx-auto pb-20'>
         <div className="flex justify-center">
            <Image src={Line} />
            <HeadingH4 text='My Portfolio' className='pl-5' />
         </div>
         <div className="">
            <Headding text='My Work Example' className='text-[50px] flex justify-center' />
         </div>
         {/* list */}





         <div className="pb-10">
            <ul className="flex justify-center space-x-6 text-teal-900 font-normal">
               {["All", ...list].map((el, idx) => {
                  return (
                     <List onClick={() => rohim(el, idx)} key={idx} text={el} className={` ${active === idx && "border-b border-orange-600"}`} />
                  )
               })}

            </ul>
         </div>
          

         < div className="flex flex-wrap gap-5">
            {
               newarry.slice(0, 4).map((el, idx) => <WorkExampleCard key={idx} itemProperty={el} />)
            }
         </div>


      </section >
   )
}

export default WorkExample

