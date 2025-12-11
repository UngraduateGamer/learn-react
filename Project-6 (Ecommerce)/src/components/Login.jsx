import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from 'react-icons/fa6';

const Login = () => {
  const [visible,setVisible] = useState(false);
  
  return (
    <div className=''>
            <form className='flex flex-col gap-5'>
                <input type="text" placeholder='Email or Phone Number' className='border-b w-full border-[rgba(0,0,0,0.5)] px-0 py-3 outline-none  ' />
                <div className='relative flex items-center justify-end'>

                <input type={`${visible?'text':'password'}`} placeholder='Password' className='border-b w-full border-[rgba(0,0,0,0.5)] px-0 py-3 outline-none  ' />
                <span className='absolute right-3 cursor-pointer' onClick={()=>{
                  setVisible(!visible)
                }} >{visible?<FaEye/>:<FaEyeSlash/>}</span>
               
                </div>
                <div className='flex justify-between items-center'>

                <button className='rounded text-white bg-[#db4444] px-10 text-center py-3 text-sm font-normal tracking-wide active:scale-95'>Log in</button>
                 <NavLink to="/login" className={'text-sm  active:scale-95 text-[#db4444] font-normal'} >Forget Password?</NavLink>
                </div>
               
      
            </form>
        </div>
  )
}

export default Login