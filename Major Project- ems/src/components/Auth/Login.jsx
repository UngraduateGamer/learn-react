import React, { useState } from 'react'
import { FaCircleUser, FaEyeSlash, FaEye, FaLock } from "react-icons/fa6";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const submitHandler = (event) => {
        event.preventDefault();
        handleLogin(email,password);
        setPassword('');
        setEmail('');
    }
    const Icon = isVisible ? FaEye :FaEyeSlash
    return (
        <div className='flex items-center justify-center h-full w-screen'>
            <div className="md:border-2 border-emerald-500 rounded-2xl">
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-5 p-20 '>
                    <div className="input flex items-center relative">

                        <FaCircleUser className='absolute left-4 mt-1 text-md  text-gray-400' />
                        <input required type="email" className='border-2 border-emerald-600 py-3 px-10 text-xl  text-white outline-none rounded-full placeholder:text-gray-400 ' placeholder='Email' value={email} onChange={(event) => {
                            setEmail(event.target.value);
                        }} />
                    </div>
                    <div className="input relative flex items-center">
                        <FaLock className='absolute left-4 mt-1 text-md  text-gray-400' />
                        <input required type={`${isVisible ? "text" : "password"}`} className='border-2 border-emerald-600 py-3 px-10 text-xl  text-white outline-none rounded-full placeholder:text-gray-400 ' placeholder='Password' value={password} onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                        <Icon className='absolute right-5 text-gray-400 cursor-pointer' onClick={() => {
                                setIsVisible(!isVisible)
                                
                            }}/>
                    </div>
                    <button className=' bg-emerald-600 py-2 px-4 text-xl  text-white outline-none rounded-full placeholder:text-white w-full font-semibold active:scale-95 cursor-pointer' >Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login