import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import HalfRating from './HalfRating';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Card = (props) => {
    const navigate = useNavigate()
    const [btn,setBtn] = useState(false);
    function PercentageValue(originalPrice, discount ){
        let res = ((originalPrice)*discount/100);
        return(Math.floor(originalPrice+res));
    }
    const AddtoCart=(e)=>{
        e.stopPropagation(); //isse ispe event listener kam nai krega parent ka 
        console.log("Clicked")
    }
  return (
    
   <div className="card w-[250px] bg-white rounded cursor-pointer" onClick={() => navigate(`/product/${props.data.id}`)}>
                <div className="image cursor-pointer w-[250px] h-[250px] bg-[#f5f5f5] p-10 relative rounded overflow-hidden group " onMouseEnter={()=>{setBtn(!btn)}} onMouseLeave={()=>{setBtn(!btn)}}>
                    <img src={props.data && props.data.thumbnail} alt="" className='w-full h-full object-cover object-center'/>
                <div className={`absolute bg-black text-white w-full p-2 ${btn?"bottom-0":"-bottom-10"} text-center left-0 transition-all    `} onClick={AddtoCart}>
                    Add to Cart
                </div>

                <div className={` ${ props.hidden ?  "hidden" : "absolute" } discount absolute bg-[#db4444] text-white rounded-md px-3 py-1 top-3 left-3 text-sm`}>
                    -{`${ Math.floor(props.data?.discountPercentage)}`}%
                </div>
                <div className='top-3 right-3 absolute flex flex-col gap-2'>

              
                </div>
                </div>
                <div className="card-description flex flex-col gap-1 my-5 over">
                    <div className="title uppercase text-md font-semibold">{props.data && props.data.title}</div>
                    <div className="price text-sm">&#8377;{Math.floor(props.data && props.data.price * 89.93).toLocaleString()}  <span className='ml-2 text-black opacity-50 line-through'>&#8377;{PercentageValue((props.data && props.data.price*89.93),props.data && props.data.discountPercentage)}</span></div>
                    <div className="ratings">
                        <HalfRating data={props.data}/>
                    </div>
                </div>
            </div>
  )
}


export default Card