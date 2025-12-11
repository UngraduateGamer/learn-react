import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
const Signup = () => {
    const [visible,setVisible] = useState(false);
  
  return (
    <div className=''>
            <form className='flex flex-col gap-5'>
                <input type="text" placeholder='Name' className='mt-10 border-b w-full border-[rgba(0,0,0,0.5)] px-0 py-3 outline-none  ' />
                <input type="text" placeholder='Email or Phone Number' className='border-b w-full border-[rgba(0,0,0,0.5)] px-0 py-3 outline-none  ' />
               <div className='relative flex items-center justify-end'>
               
                               <input type={`${visible?'text':'password'}`} placeholder='Password' className='border-b w-full border-[rgba(0,0,0,0.5)] px-0 py-3 outline-none  ' />
                               <span className='absolute right-3 cursor-pointer' onClick={()=>{
                                 setVisible(!visible)
                               }} >{visible?<FaEye/>:<FaEyeSlash/>}</span>
                              
                               </div>
                               
                <button className='rounded text-white bg-[#db4444] text-center py-3 text-sm font-normal tracking-wide'>Create Account</button>
                <GoogleLogin className=""
        onSuccess={(res) => {
          console.log("Login Success ✅", res);
        }}
        onError={() => {
          console.log("Login Failed ❌");
        }}
      />
      <p className='font-light  text-center tracking-wide text-sm'>Already have an account? <NavLink to="/login" className={' ml-5 active:scale-95 underline font-normal'} >Log in</NavLink></p> 
            </form>
        </div>
  )
}

export default Signup