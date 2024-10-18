import React from 'react'
import Image from './Image'
import Work from '../../assets/images/work_ex_one.jpg'
import Headding from './Headding'


const WorkExampleCard = ({ itemProperty }) => {
  const { catagory, image } = itemProperty
  return (
    <div className='h-[520px] w-[570px]'>
      <div className="">
        <Image src={image} className='h-[420px] w-[570px]' />
      </div>
      <div className="bg-PrimaryColor h-[100px]">
        <Headding text={catagory} className='text-white text-2xl pt-2 pl-4' />
        <Headding text='Website' className='text-white text-xl pt-2 pl-4 font-jost font-light	' />
      </div>

    </div>
  )
}

export default WorkExampleCard