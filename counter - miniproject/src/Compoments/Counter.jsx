import React, { useState } from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";

const Counter = () => {
    const [count,setCount] = useState(1);
    function decrease(){
        setCount(count-1)

    }
    function increase(){
        setCount(count+1)

    }
  return (
    <div className='bg-blue-100 h-screen w-full flex justify-center items-center flex-col'>
        <h2 className='text-6xl mb-8 font-bold text-blue-900'>Counter App</h2>
        <div className="counter flex gap-5 items-center cursor-pointer">
            <FiMinus className='text-6xl text-blue-300  hover:text-blue-500 transition duration-300 ease-in-out' onClick={decrease}/>
            <div className="count text-7xl font-bold flex items-center justify-center bg-blue-500 text-white rounded-2xl h-35 w-40">{count}</div>
            <FiPlus className='text-6xl text-blue-300 cursor-pointer hover:text-blue-500 ' onClick={increase}/>
        </div>
    </div>
  )
}

export default Counter