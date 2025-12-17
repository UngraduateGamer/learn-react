import React, { useContext, useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios';
import Card from './Card';
import Line from './Line';
import Category from './Category';

const OurProduct = () => {
  const [userData, setUserData] = useState([]);
      const [sale,setSale] = useState([]);
      const [visible,setVisible] = useState(false);
  
useEffect(()=>{
  async function getData(){
    const data  = await axios.get("https://dummyjson.com/products?limit=10&skip=10");
    setUserData(data.data.products);
  }
  getData()
},[])

useEffect(()=>{
},[userData])
  
  function showAllProducts(){
     setVisible(!visible);
  }
  
  return (

    <div className='w-[90%] mt-50 mx-auto '>
        <div className="top flex gap-3 items-center">
            <div className="box w-[20px] h-[40px] bg-[#DB4444] rounded-md"></div>
            <div className="text-[#db4444] text-md font-semibold">Our Products</div>
        </div>
        <div className="flash-sale mt-5 w-full flex justify-between">
            <h2 className='text-4xl font-medium w-full'>Explore Our Products</h2>
        <div className="flex  gap-3 ">
          <div className='rounded-full h-[46px] w-[46px] bg-[#f1f1f1] flex items-center justify-center '> <FaArrowLeft className=' '/></div>
           <div className='rounded-full h-[46px] w-[46px] bg-[#f1f1f1] flex items-center justify-center '><FaArrowRight className=' '/></div>
        </div>
            <div>
            </div>

          
        </div>
       <div className="cards-container py-10 flex gap-x-5 gap-y-5 overflow-x-auto  flex-wrap">
            {
              userData.map((elem)=>{
                return <Card data={elem} hidden={true}/>
              })
            }
        </div>
            
    </div>
  )
}

export default OurProduct