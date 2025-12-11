import Card from './Card';
import Line from './Line';
import Category from './Category';
import React, { useContext, useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { ProductContext } from '../context/ProductProvider';
import { CategoryContext } from '../context/CategoryProvider';
const ThisMonth = () => {
  const [userData, setUserData] = useState([]);
      const [sellingProducts,setSellingProducts] = useState([]);
      const [visible,setVisible] = useState(false);
      const data = useContext(ProductContext);
          useEffect(() => {
          if (data && data.length > 0) {
      
              setUserData(data);
      
              const result = data.filter(item => item.rating > 3.5);
              setSellingProducts(result);
          }
      }, [data]);
      
      
      function showAllProducts(){
         setVisible(!visible);
      }
  return (

    <div className='w-[90%] mt-20 mx-auto '>
        <div className="top flex gap-3 items-center">
            <div className="box w-[20px] h-[40px] bg-[#DB4444] rounded-md"></div>
            <div className="text-[#db4444] text-md font-semibold">This Month</div>
        </div>
        <div className="flash-sale mt-5 w-full flex justify-between items-center relative">
            <h2 className='text-4xl font-medium w-full'>Best Selling Products </h2>
         <button className='btn capitalize bg-[#db4444] text-white whitespace-nowrap px-7 py-4 rounded mx-auto flex items-center text-xs active:scale-95 cursor-pointer mt-10  absolute -translate-y-1/2 right-0 ' onClick={()=>{
          setVisible(!visible)
         }}>{visible ? "View Less" : "View More"} </button>
            <div>
            </div>

          
        </div>
          <div className="cardssss">
        <div className={`cards-container justify-start py-10 flex gap-6 overflow-x-auto h-full  ${visible ? 'flex-wrap':'flex-nowrap'}`}>
            {
                sellingProducts && sellingProducts.map((elem,idx)=>{
                    return <Card key={idx} data={elem}  />
                                })
            }
        </div>
        </div>
       <Line/>
    </div>
  )
}

export default ThisMonth