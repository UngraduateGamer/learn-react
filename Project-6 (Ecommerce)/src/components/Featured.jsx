import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Card from './Card';
import Line from './Line';
import Category from './Category';
import ps5 from "../assets/ps5.png"
import image1 from "../assets/attractive.png"
import speaker1 from "../assets/speaker1.png"
import perfume from "../assets/perfume.png"
import { useNavigate } from 'react-router-dom';
const Featured = () => {
    const navigate = useNavigate()
  return (

    <div className='w-[90%] mt-20 mx-auto '>
        <div className="top flex gap-3 items-center">
            <div className="box w-[20px] h-[40px] bg-[#DB4444] rounded-md"></div>
            <div className="text-[#db4444] text-md font-semibold">Featured</div>

        </div>
            <div className="text-black  text-4xl text-md font-medium my-5">New Arrival</div>
  
        <div className="arrivals my-10 flex gap-10">
            <div className="left relative h-[600px] w-[570px] bg-black w-1/2  cursor-pointer" onClick={()=>navigate("/products/category/mens-watches")}>
                <img src={'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp'} alt=""  className='w-full h-full relative z-2 '/>
                <div className="circle absolute top-1/2 left-1/2 -translate-1/2 z-1 rounded-full h-60 w-60  bg-white blur-[190px]  ">
                            efb
                </div>
                <div className="absolute flex flex-col gap-2 bottom-10 left-10 text-white z-3 ">
                    <p className='font-semibold text-lg'>Apple Watch Series 4 Gold</p>
                    <p className='text-sm  w-[70%]'>features like heart rate  <br/> monitoring, fitness tracking, and a beautiful Retina display.</p>
                    <button className=' w-fit  text-md underline cursor-pointer font-medium'>Shop Now</button>
                </div>
            </div>
            
            <div className="flex flex-col justify-between">
                <div className="right w-[770px] h-[284px] relative bg-black p-10 flex flex-col gap-40  ">
                <div className="flex items-end justify-between overflow-hidden" onClick={()=>navigate("/products/category/womens-dresses")}>

                <div className="left text-white flex flex-col relative z-10 gap-5 w-[80%]" >
                    <p className='font-medium text-4xl'>Women's Collections</p>
                    <p className='text-sm  w-[70%]'>Featured  woman collections that <br /> give you another vibe.</p>
                    <button className=' w-fit  text-md underline cursor-pointer font-medium'>Shop Now</button>
                </div>
                <div className="right  ">
                    <img src={image1} alt=""  className='h-full object-cover object-center absolute right-0 bottom-0'/>
                </div>
                </div>
              
            </div>
            <div className="flex justify-between gap-8 ">
                    <div className="left relative h-[284px] w-1/2 bg-black flex items-center  z-1 justify-center cursor-pointer" onClick={()=>navigate("/products/category/mens-shoes")}>
                <img src={'https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/2.webp'} alt=""  className='h-[130%] mb-10 object-cover object-center'/>
                <div className="absolute flex flex-col gap-2 bottom-10 left-10 text-white drop-shadow drop-shadow-[#00000056] ">
                    <p className='font-semibold text-lg'>Sneakers</p>
                    <p className='text-sm  w-[70%]'>Limited Edition Sneakers</p>
                    <button className=' w-fit  text-md underline cursor-pointer font-medium'>Shop Now</button>
                </div>
                <div className="circle absolute -z-1 rounded-full h-60 w-60 blur-8xl bg-white  blur-[190px] ">

                </div>
            </div>

                    <div className="left relative h-[284px] w-1/2 bg-black flex items-center  z-1 justify-center cursor-pointer" onClick={()=>navigate("/products/category/fragrances")}>
                <img src={perfume} alt=""  className='h-[80%] object-cover object-center'/>
                <div className="absolute flex flex-col gap-2 bottom-10 left-10 text-white ">
                    <p className='font-semibold text-lg'>Perfume</p>
                    <p className='text-sm  w-[70%]'>GUCCI INTENSE OUD EDP</p>
                    <button className=' w-fit  text-md underline cursor-pointer font-medium'>Shop Now</button>
                </div>
                <div className="circle absolute -z-1 rounded-full h-60 w-60 blur-8xl bg-white  blur-[200px] ">

                </div>
            </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Featured