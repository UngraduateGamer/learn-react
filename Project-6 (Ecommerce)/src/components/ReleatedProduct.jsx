import React, { useContext, useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios';
import Card from './Card';
import Line from './Line';
import Category from './Category';

const ReleatedProduct = ({data,idx}) => {
  const [userData, setUserData] = useState([]);
      const [sale,setSale] = useState([]);

      const [visible,setVisible] = useState(false);
  
useEffect(()=>{
  async function getData(){
    let url =  `https://dummyjson.com/products/category/${data}`;
    const result  = await axios.get(url);
    let temp =[];
    temp = result.data.products;
    // setUserData(result.data.products);
    temp = temp.filter((elem)=>{return elem.id != idx})
    setUserData(temp);
  }
  getData()
},[data,idx])

useEffect(()=>{
},[userData])
  
  function showAllProducts(){
     setVisible(!visible);
  }
  
  return (

    <div className='w-[90%] mx-auto my-10'>
        <div className="top flex gap-3 items-center">
            <div className="box w-[20px] h-[40px] bg-[#DB4444] rounded-md"></div>
            <div className="text-[#db4444] text-md font-semibold">Related Item</div>
        </div>
      
       <div className="cards-container py-10 flex gap-x-5 gap-y-5 overflow-x-auto  flex-wrap">
            {
              userData.map((elem,idnx)=>{
                return <Card data={elem} hidden={true} key={idnx}  idx={idx}/>
              })
            }
        </div>
       
    </div>
  )
}

export default ReleatedProduct