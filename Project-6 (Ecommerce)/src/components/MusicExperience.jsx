import React from 'react'
import { useNavigate } from 'react-router-dom'

const MusicExperience = () => {
    const navigate = useNavigate()
  return (
    <div className='w-[90%] mx-auto mb-20 '> 
        <div className="container bg-black text-white flex p-10 relative z-1">
            <div className="left w-1/2 flex flex-col gap-5">
                <h4 className='text-[#CB301B] font-medium'>Categories</h4>
                <h2 className='capitalize text-5xl font-medium leading-14'>Enhance your <br /> <span className='text-[#CB301B]'>Vision</span>  experience</h2>
                <div className="time flex gap-2 items-center text-3xl font-semibold">
                    With Sunglasses
                    {/* <div className="circle flex flex-col bg-white rounded-full h-[72px] w-[72px] text-black justify-center items-center leading-4">
                        <p className='font-bold'>23</p>
                        <p className='text-xs'>Hours</p>
                    </div>
                    <div className="circle flex flex-col bg-white rounded-full h-[72px] w-[72px] text-black justify-center items-center leading-4">
                        <p className='font-bold'>05</p>
                        <p className='text-xs'>days</p>
                    </div>
                    <div className="circle flex flex-col bg-white rounded-full h-[72px] w-[72px] text-black justify-center items-center leading-4">
                        <p className='font-bold'>59</p>
                        <p className='text-xs'>Minutes</p>
                    </div>
                    <div className="circle flex flex-col bg-white rounded-full h-[72px] w-[72px] text-black justify-center items-center leading-4">
                        <p className='font-bold'>35</p>
                        <p className='text-xs'>Seconds</p>
                    </div> */}
                </div>
                <button className='btn px-10 py-4 rounded w-fit text-sm bg-[#CB301B]'>Buy Now</button>
            </div>
            <div className="right  w-1/2 relative flex items-center justify-center  h-80" onClick={()=>navigate("/products/category/sunglasses")}>
                <img src="https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/2.webp" alt="" className='' />
                <div className="circle rounded-full h-[304px] w-[300px] bg-white absolute blur-[200px]  -z-1"></div>
            </div> 
        </div>
    </div>
  )
}

export default MusicExperience