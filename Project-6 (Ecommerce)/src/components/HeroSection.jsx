import React from 'react'
import LeftSide from './LeftSide'
import Slider from './Slider'
import Banner from "./../../public/images/Banner.jpg"
import { useNavigate } from 'react-router-dom'
const HeroSection = ({categories}) => {
  const navigate = useNavigate();
  return (
    <div className='w-[90%] mx-auto flex '>
      <div className="w-[15%] ">
        <LeftSide categories={categories} />
      </div>
      <div className="w-[85%] flex items-center justify-center">
        <img src={Banner} alt="" className='w-full p-10 cursor-pointer' onClick={()=>navigate("/products/category/laptops")}/>
      </div>
        
    </div>
  )
}

export default HeroSection