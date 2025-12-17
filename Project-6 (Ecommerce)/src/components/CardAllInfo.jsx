import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import HalfRating from './HalfRating';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const CardAllInfo = (props) => {
    const [btn,setBtn] = useState(false);
    function PercentageValue(originalPrice, discount ){
        let res = ((originalPrice)*discount/100);
        return(Math.floor(originalPrice+res));
    }
    
  return (
    <NavLink to={`/product/${props.data.id}`}>
   <div className="card w-[250px]  bg-white rounded p-2 pb-0 border border-gray-200">
                <div className="image  relative rounded overflow-hidden group bg-gray-100 " onMouseEnter={()=>{setBtn(!btn)}} onMouseLeave={()=>{setBtn(!btn)}}>
                    <img src={props.data && props.data.thumbnail} alt="" className='w-full h-full object-cover object-center'/>
                {/* <div className={`absolute bg-black text-white w-full p-2 ${btn?"bottom-0":"-bottom-10"} text-center left-0 transition-all  text-xs `}>
                    Add to Cart
                </div> */}

                <div className={` ${ props.hidden ?  "hidden" : "absolute" } discount absolute bg-[#db4444] text-white rounded-md px-3 py-1 top-3 left-3 text-xs`}>
                    -{`${ Math.floor(props.data?.discountPercentage)}`}%
                </div>
                {/* <div className='top-3 right-3 absolute flex flex-col gap-2'>

                <div className="wishlist  bg-white  h-[34px] w-[34px] rounded-full flex items-center justify-center ">
                    <IoMdHeartEmpty className='text-2xl' />
                </div>
                <div className="eye  bg-white  h-[34px] w-[34px] rounded-full flex items-center justify-center ">
                    <IoEyeOutline className='text-2xl' />
                </div>
                </div> */}
                </div>
                <div className="card-description flex flex-col  justify-between gap-1 my-5 over">
                    <div className="title uppercase   text-sm  font-normal  w-[90%] truncate ">{props.data && props.data.title}</div>
                    <div className="price text-sm font-semibold">&#8377;{Math.floor(props.data && props.data.price * 89.93).toLocaleString()}  <span className='ml-2 text-black opacity-50 font-normal line-through'>&#8377;{PercentageValue((props.data && props.data.price*89.93),props.data && props.data.discountPercentage)}</span></div>
                    <div className='flex items-center gap-2'>

                    <div className="ratings bg-[#df4444] text-white w-fit flex justify-center text-xs items-center px-2 py-1 rounded-xl" >
                       {Number(props.data.rating.toFixed(1)) } &#9733; 
                    </div>
                    <span className='review text-gray-800 text-xs' >{props.data.reviews.length} Reviews </span> 
                 </div>
                </div>
            </div>
            </NavLink>
  )
}

export default CardAllInfo