import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Headding from './layouts/Headding';

const Progress = ({stp}) => {
    let [currentNum, setcurrentNum] = useState(0)

    const stopNumber = stp;

    useEffect(()=>{
         setInterval(() => {
            if (currentNum <= stopNumber) {
                clearInterval()
            }
            if (currentNum <= stopNumber) {
                setcurrentNum(currentNum++)   
            }
       
         }, 20);
    },[])
    
    return (

           <div className='h-[282px] w-[270px] bg-white shadow-2xl'>
            
        <div className='h-[160px] w-[160px] ml-[50px] mt-[30px]'>
            <CircularProgressbar className='font-Vollkorn font-semibold' value={currentNum} text={`${currentNum}%`} styles={buildStyles({pathColor: `#E5745D`,textColor: '#E5745D'})}/>
             <Headding text={`Graphic Design`} className={`text-[20px] pt-10`}/>
        </div>
           </div>

        
    )
}

export default Progress    