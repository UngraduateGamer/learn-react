import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Card from './Card';
import Line from './Line';
import Category from './Category';
import { CgGirl } from "react-icons/cg";
import { TbPerfume } from "react-icons/tb";
import { RiSofaLine } from "react-icons/ri";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { TfiHome } from "react-icons/tfi";
import { FaKitchenSet } from "react-icons/fa6";
import { IoIosLaptop } from "react-icons/io";
import { PiTShirtLight } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { BsWatch } from "react-icons/bs";
import { RxMobile } from "react-icons/rx";
import { PiMotorcycleFill } from "react-icons/pi";
import { MdFace3 } from "react-icons/md";
import { FcSportsMode } from "react-icons/fc";
import { GiSunglasses } from "react-icons/gi";
import { GiTablet } from "react-icons/gi";
import { GiSleevelessTop } from "react-icons/gi";
import { RiCarLine } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { FaShoppingBag } from 'react-icons/fa';
import { GiAmpleDress } from "react-icons/gi";
import { GiNecklaceDisplay } from "react-icons/gi";
import { PiHighHeelLight } from "react-icons/pi";
import { TiWatch } from "react-icons/ti";
import { useEffect } from 'react';
import { useRef } from 'react';
const ByCategory = ({categories}) => {
    const sliderRef = useRef(null);

  const scrollLeft = () => {
    
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const logos = [CgGirl,TbPerfume,RiSofaLine,MdOutlineLocalGroceryStore,TfiHome,FaKitchenSet,IoIosLaptop,  PiTShirtLight,GiConverseShoe,BsWatch,RxMobile,PiMotorcycleFill,MdFace3,RxMobile,FcSportsMode,GiSunglasses,GiTablet,GiSleevelessTop,RiCarLine,FaShoppingBag,GiAmpleDress,GiNecklaceDisplay,PiHighHeelLight,TiWatch]
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    if (categories?.length) {
      const data = categories.map((cat, index) => ({
        name: cat,
        Icon: logos[index] || null
      }));
      setCategoryData(data);
    }
  }, [categories]);
  return (

    <div className='w-[90%] mt-50 mx-auto '>
        <div className="top flex gap-3 items-center">
            <div className="box w-[20px] h-[40px] bg-[#DB4444] rounded-md"></div>
            <div className="text-[#db4444] text-md font-semibold">Categories</div>
        </div>
        <div className="flash-sale mt-5 w-full flex justify-between">
            <h2 className='text-4xl font-medium w-full'>Browse By Category </h2>
        <div className="flex  gap-3 ">
          <div className='rounded-full h-[46px] w-[46px] bg-[#f1f1f1] flex items-center justify-center ' onClick={scrollLeft}> <FaArrowLeft className=' '/></div>
           <div className='rounded-full h-[46px] w-[46px] bg-[#f1f1f1] flex items-center justify-center ' onClick={scrollRight}><FaArrowRight className=' '/></div>
        </div>
            <div>
            </div>

          
        </div>
       <div className="categories cards-container flex gap-5 overflow-x-auto"
       ref={sliderRef}>
       {
        categoryData?.map((elem,idx)=>{
          return <Category key={idx} data={elem} />
        })
       }
        
       </div>
       <Line/>
    </div>
  )
}

export default ByCategory