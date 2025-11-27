import React from 'react'
import { useState } from 'react';

const Forms = () => {
    const [name,setName] = useState('');
    function submitHandler(event){
        event.preventDefault();
        setName('')
    }
    function changeName(event){
        setName(event.target.value);
    }
  return (
    <div className='bg-gray-950 h-screen w-full text-white'>
        <form action="">
        <input type="text"
        placeholder='Enter your name' value={name} className='form-control w-90 rounded-md text-white p-3 mt-5 ml-5 bg-gray-400 placeholder:text-white' onChange={changeName}/>
        <br />
        <button className='m-5 p-3 bg-green-500 rounded-md' onClick={submitHandler}>Submit</button>
        </form>
    </div>
  )
}

export default Forms