import React from 'react'
import Image from './layouts/Image'
import One from '../assets/icons/one.png'
import TWO from '../assets/icons/two.png'
import Three from '../assets/icons/three.png'
import Four from '../assets/icons/four.png'
import Headding from './layouts/Headding'
import Progress from './Progress'


const ProgressBar = () => {
  return (
     <div className="w-container mx-auto py-[50px] flex justify-between">
         <Progress stp={70}/>
         <Progress stp={85}/>
         <Progress stp={60}/>
         <Progress stp={40}/>
     </div>
  )
}

export default ProgressBar