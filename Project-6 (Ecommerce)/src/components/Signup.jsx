import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import bcrypt from "bcryptjs"
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Signup = () => {
  const [visible,setVisible] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  function submitHandler(event){
    event.preventDefault();

    const hashedPassword = bcrypt.hashSync(password,10);

    const userData = {
      id: Date.now(),              // ✅ ADDED
      name,
      email,
      password: hashedPassword
    };

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(userData)
    );

  const users =
  JSON.parse(localStorage.getItem("registeredUsers")) || [];

users.push(userData);

localStorage.setItem(
  "registeredUsers",
  JSON.stringify(users)
);


    setName('');
    setEmail('');
    setPassword('');
    navigate("/");
  }

  return (
    <div>
      <form className='flex flex-col gap-5' onSubmit={submitHandler}>

        <input
          type="text"
          placeholder='Name'
          required
          value={name}
          className='mt-10 border-b w-full px-0 py-3 outline-none'
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="text"
          placeholder='Email or Phone Number'
          value={email}
          required
          className='border-b w-full px-0 py-3 outline-none'
          onChange={(e)=>setEmail(e.target.value)}
        />

        <div className='relative flex items-center justify-end'>
          <input
            type={visible ? 'text' : 'password'}
            value={password}
            required
            placeholder='Password'
            className='border-b w-full px-0 py-3 outline-none'
            onChange={(e)=>setPassword(e.target.value)}
          />
          <span
            className='absolute right-3 cursor-pointer'
            onClick={()=>setVisible(!visible)}
          >
            {visible ? <FaEye/> : <FaEyeSlash/>}
          </span>
        </div>

        <button className='rounded text-white bg-[#db4444] py-3'>
          Create Account
        </button>

        {/* 🔵 GOOGLE LOGIN */}
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);

            const googleUser = {
              id: decoded.sub,          // ✅ ADDED (unique Google ID)
              name: decoded.name,
              email: decoded.email,
              img: decoded.picture
            };

            localStorage.setItem(
              "registeredUser",
              JSON.stringify(googleUser)
            );

            localStorage.setItem(
              "loggedInUser",
              JSON.stringify(googleUser)
            );

            navigate("/");
          }}
          onError={() => {
            console.log("Login Failed ❌");
          }}
        />

        <p className='text-center text-sm'>
          Already have an account?
          <NavLink to="/login" className='ml-2 underline'>
            Log in
          </NavLink>
        </p>

      </form>
    </div>
  );
};

export default Signup;
