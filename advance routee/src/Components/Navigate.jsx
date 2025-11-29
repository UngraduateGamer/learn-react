import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const Navigate = () => {
    const navigate = useNavigate();
  return (
    <div className='absolute top-0  mx-auto w-full text-xl '>
        <div className="btns mx-auto w-[80%] flex gap-3 p-5">
            <button className='btn px-5 py-3 bg-blue-600 cursor-pointer active:scale-95 rounded' 
            onClick={()=>{navigate(-1)}} 
            ><FaChevronLeft/></button>
            <button className='btn px-5 py-3 bg-blue-600 cursor-pointer active:scale-95 rounded' 
            onClick={()=>{navigate("/")}} 
            >Go to Home</button>
            <button className='btn px-5 py-3 bg-blue-600 cursor-pointer active:scale-95 rounded' 
            onClick={()=>{navigate(+1)}} 
            ><FaChevronRight/></button>

        </div>
    </div>
  )
}

export default Navigate