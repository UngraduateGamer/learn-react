import React, { useContext, useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Card from './Card';
import Line from './Line';
import { ProductContext } from '../context/ProductProvider';
import { CategoryContext } from '../context/CategoryProvider';
const Todays = () => {
    const [userData, setUserData] = useState([]);
    const [sale,setSale] = useState([]);
    const [visible,setVisible] = useState(false);
const data = useContext(ProductContext);
    useEffect(() => {
    if (data && data.length > 0) {

        setUserData(data);

        const result = data.filter(item => item.discountPercentage > 10);
        setSale(result);
    }
}, [data]);


function showAllProducts(){
   setVisible(!visible);
}

  return (
  <div className='w-[90%] mx-auto '>
        <div className="top flex gap-3 items-center">
            <div className="box w-[20px] h-[40px] bg-[#DB4444] rounded-md"></div>
            <div className="text-[#db4444] text-md font-semibold">Today's</div>
        </div>
        <div className="flash-sale mt-5  w-full flex justify-between items-center">
            <h2 className='text-4xl font-medium '>Flash Sales </h2>
            <div>

          
            </div>
        </div>
        <div className="cardssss">
        <div className={`cards-container  py-10 flex gap-6 overflow-x-auto h-full  ${visible ? 'flex-wrap':'flex-nowrap'}`}>
            {
                sale && sale.map((elem,idx)=>{
                    return <Card key={idx} data={elem}  />
                                })
            }
        </div>
            <button className='btn capitalize bg-[#db4444] text-white px-7 py-4 rounded mx-auto flex items-center text-xs active:scale-95 cursor-pointer mt-10' onClick={showAllProducts}>{`${visible ? "view less products" : "view more products"} `}</button>
        <Line/>
        </div>
    </div>
       
   
    
  )
}

export default Todays