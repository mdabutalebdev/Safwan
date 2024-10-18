import React from 'react'
import Image  from '../layouts/Image'
import Headding from './Headding'
import Vector_One from '../../assets/icons/Vector_one.svg'
import Star from '../../assets/icons/Star.png'
import Circel from '../../assets/icons/circel.png'
import Cotetion from '../../assets/images/cotetion.png'
const FeedbackCard = () => {
  return (
   
   
    <div className="flex py-[50px]">
 
       <div className="">
                    <div className="h-2 w-[570] bg-ButtonBg">
                            
                    </div> 
            <div className="h-[138px] w-[570px] bg-white py-10 shadow-2xl mb-10">
                     
                      <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
                      typesetting industry.</p>
                      <Image src={Vector_One} className={`ml-[90px] mt-[10px]`}/>
             </div>
         

          {/* 2nd pard */}
              <div className="flex">
                  <div className="h-[70px] w-[70px] border rounded-full mt-5 ml-20 bg-teal-100">
                      <Image src={Circel}/>
                      <Image src={Cotetion} className={`ml-[18px] mt-[-15px]`}/>
                  </div>
                  <div className="mt-7 ml-11">
                      <Headding text={`Michale Doie`}/>
                      <p>Product Designer</p>
                      <Image src={Star}/>
                   </div>
             </div>

      </div>
   </div>
 
  )
}

export default FeedbackCard