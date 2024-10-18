import React from 'react'
import Image from './layouts/Image'
import HeadingH4 from './layouts/HeadingH4'
import Line from '../assets/icons/Line.svg'
import Headding from './layouts/Headding'
import Fc_one from '../assets/icons/fc_one.svg'
import Fc_two from '../assets/icons/fc_two.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeedbackCard from './layouts/FeedbackCard'



 

const FeedbackClient = () => {
 
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };




  return (
     <section className='w-Bannercontainer mx-auto bg-red-50 py-11'>
        <div className="relative">
            <Image src={Fc_one} className={`absolute top-10 left-40`}/>
        </div>
        <div className="flex justify-center mx-auto">
            <Image src={Line}/>
            <HeadingH4 text='Client Testimonial' className='pl-5'/>
        </div>
        <div className="">
            <Headding text={`Feedback From Client`} className={`text-[50px] text-center`}/>
        </div>
        

      <Slider {...settings} className="pb-20 w-container mx-auto">
         <FeedbackCard />
         <FeedbackCard />
         <FeedbackCard />
         
      </Slider>
          {/* cotetion start */}
   
   <div className="relative">
            <Image src={Fc_two} className={`absolute top-[-100px] right-40`}/>
    </div>
       
          {/* cotetion end */}


     </section>
  )
}

export default FeedbackClient