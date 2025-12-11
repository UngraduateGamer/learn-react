import React, { useState } from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdHeadsetMic } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";

const Tags = () => {
    const [scrollY,setScollY] = useState('0');
    const handleTopButton = ()=>{
        setScollY(0);
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <div className='w-[90%] mx-auto relative h-[300px]'>
        <div className="tags-container w-[80%] mx-auto flex justify-center items-center gap-">
        <div className="tag w-1/3 flex  flex-col items-center justify-center gap-5 my-10">
            <div className="circle w-[80px] h-[80px] rounded-full  bg-[#2f2e3030]  overflow-hidden flex items-center justify-center">
                <div className="flex items-center justify-center h-[60px] w-[60px] rounded-full bg-black ">
                    <CiDeliveryTruck className='text-white text-4xl'/>
                    </div>
            </div>
            <div className="description text-center">
                <p className='uppercase text-xl font-semibold'>free and fast delivery</p>
                <p className='text-sm'>Free delivery for all orders over &#8377;999</p>
            </div>
        </div>


        <div className="tag w-1/3 flex  flex-col items-center justify-center gap-5 my-10">
            <div className="circle w-[80px] h-[80px] rounded-full  bg-[#2f2e3030]  overflow-hidden flex items-center justify-center">
                <div className="flex items-center justify-center h-[60px] w-[60px] rounded-full bg-black ">
                    <MdHeadsetMic className='text-white text-4xl'/>
                    </div>
            </div>
            <div className="description text-center">
                <p className='uppercase text-xl font-semibold'>24/7 CUSTOMER SERVICE</p>
                <p className='text-sm'>Friendly 24/7 customer support</p>
            </div>
        </div>
        <div className="tag w-1/3 flex  flex-col items-center justify-center gap-5 my-10">
            <div className="circle w-[80px] h-[80px] rounded-full  bg-[#2f2e3030]  overflow-hidden flex items-center justify-center">
                <div className="flex items-center justify-center h-[60px] w-[60px] rounded-full bg-black ">
                    <RiShieldCheckLine className='text-white text-4xl'/>
                    </div>
            </div>
            <div className="description text-center">
                <p className='uppercase text-xl font-semibold'>MONEY BACK GUARANTEE</p>
                <p className='text-sm'>We reurn money within 30 days</p>
            </div>
        </div>
    </div>
    <div className="arrow-up right-0 bottom-10 flex  absolute items-center justify-center bg-[#f5f5f5] txtblack rounded-full w-[46px] h-[46px] active:scale-95 cursor-pointer " onClick={handleTopButton}>
        <FaArrowUp/>
    </div>
    </div>
  )
}

export default Tags