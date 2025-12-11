import React, { useEffect, useState } from "react";
import { FaStar, FaRegHeart, FaTruck, FaUndo, FaRegUser } from "react-icons/fa";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReleatedProduct from "../components/ReleatedProduct";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "../components/Rating";

import { FaRegUserCircle } from "react-icons/fa";

const ProductDetails = () => {
    function PercentageValue(originalPrice, discount ){
        let res = ((originalPrice)*discount/100);
        return(Math.floor(originalPrice+res));
    }
    
    const {id} = useParams();
    const [data,setData] = useState({});
    useEffect(()=>{
        async function getDataById(id){
            let url = `https://dummyjson.com/products/${id}`;
            const data = await axios.get(url);
            setData(data.data);

        }
        getDataById(id)

    },[id])




  const [mainImage, setMainImage] = useState(null);
  useEffect(() => {
  if (data?.images?.length > 0) {
    setMainImage(data.images[0]);
  }
}, [data]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");
  const [maxValue,setMaxValue] = useState(1);
  useEffect(()=>{
    if(data?.stock > 0 ){
        setMaxValue(data?.stock);
    }
  },[data])
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="w-[90%] mx-auto px-4 py-12">
      <div className="flex justify-between gap-10">
    <div className="left w-full flex flex-col">
      <div className="top flex w-full">

        {/* LEFT – THUMBNAILS */}
        <div className="flex lg:flex-col gap-4 w-35 ">
          {data?.images?.map((img, index) => (
            <button
              key={index}
              onClick={() => setMainImage(img)}
              className={` w-fit p-2 rounded bg-gray-100 ${
                mainImage === img ? "border-[#db4444] border-2" : ""
              }`}
            >
              <img src={img} alt="" className="w-20 h-20 object-contain" />
            </button>
          ))}
        </div>

        {/* CENTER – MAIN IMAGE */}
        <div className="bg-gray-100 h-[500px] w-full flex items-center justify-center rounded">
          <img
            src={mainImage}
            alt="Product"
            className="max-h-[500px] w-full object-contain"
          />
        
        </div>
        </div>  
        <div className="bottom mt-10 flex gap-10">
                   <div className="border p-5 rounded w-[350px] border-gray-200 h-fit">
  <h3 className="text-lg font-semibold mb-3">Product Highlights</h3>

  <div className="space-y-2">
    {/* ROW */}
    <div className="flex items-start">
      <p className="w-40 text-xs text-gray-600">Brand</p>
      <p className="text-md">{data?.brand}</p>
    </div>

    <div className="flex items-start">
      <p className="w-40 text-xs text-gray-600">Warranty</p>
      <p className="text-md">{data?.warrantyInformation}</p>
    </div>

    <div className="flex items-start">
      <p className="w-40 text-xs text-gray-600">Product Weight</p>
      <p className="text-md">{data?.weight} kg</p>
    </div>

    <div className="flex items-start">
      <p className="w-40 text-xs text-gray-600">Width</p>
      <p className="text-md">{data?.dimensions?.width} cm</p>
    </div>

    <div className="flex items-start">
      <p className="w-40 text-xs text-gray-600">Height</p>
      <p className="text-md">{data?.dimensions?.height} cm</p>
    </div>

    <div className="flex items-start">
      <p className="w-40 text-xs text-gray-600">Depth</p>
      <p className="text-md">{data?.dimensions?.depth} cm</p>
    </div>
  </div>
</div>

<div className="border p-5 rounded border-gray-200 min-w-[500px]" >
    <h3 className="text-lg font-semibold mb-3">Product Rating & Reviews</h3>
    <div className="cards flex flex-col gap-5">
        {data?.reviews?.map((elem,idx)=>(
      <div className="card bg-gray-100 p-3 rounded " key={idx}>
          <h1 className="text-sm font-medium tracking-wide flex items-center gap-2"> <FaRegUser className="bg-gray-400 rounded-full  p-1 text-4xl flex items-center justify-center"/> {elem?.reviewerName}  </h1>
          <div className="gap-1 items-center">
           <Rating rating={elem?.rating}/>
           <span className="font-semibold text-sm">{elem?.comment}</span>
          </div>
          
          

      </div>
        ))}
    </div>
</div>
        </div>
</div>
        {/* RIGHT – PRODUCT INFO */}
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold">
           {data?.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex text-white bg-[#df4444] rounded-full p-2 flex gap-1 items-center justify-center">
              {Number(data?.rating?.toFixed(1))} 
              <FaStar className="text-white mb-1" />
            </div>
            <span className="text-gray-500">{data?.reviews?.length} Reviews</span>
            <span className="text-green-600 ml-2">{data?.availabilityStatus
}</span>
          </div>

           <div className="price text-4xl font-semibold">&#8377;{Math.floor(data?.price* 89.93)?.toLocaleString()}  <span className='ml-2 text-black opacity-50 line-through text-xl font-normal'>&#8377;{PercentageValue((data?.price*89.93),data?.discountPercentage)}</span> <span className="text-green-600 text-xl font-normal">{data?.discountPercentage > 0 && `${Math.floor(data?.discountPercentage)}% off` }
</span></div>

          <p className="text-gray-600 text-sm">
            {data?.description}
          </p>

          <hr />

          {/* Colours
          <div className="flex items-center gap-4">
            <span className="font-medium">Colours:</span>
            <button className="w-5 h-5 rounded-full bg-blue-600 border"></button>
            <button className="w-5 h-5 rounded-full bg-red-400 border"></button>
          </div> */}

          {/* Size */}
          {/* <div className="flex items-center gap-3">
            <span className="font-medium">Size:</span>
            {["XS", "S", "M", "L", "XL"].map((item) => (
              <button
                key={item}
                onClick={() => setSize(item)}
                className={`px-3 py-1 border rounded text-sm ${
                  size === item
                    ? "bg-red-500 text-white border-red-500"
                    : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div> */}

          {/* Quantity */}
         <button className="px-5 py-3 rounded bg-[#db4444] text-white  font-medium  cursor-pointer w-full">Buy Now</button>
         <button className="px-5 py-3 rounded border-[#db4444] border font-medium  cursor-pointer  text-[#db4444]  w-full">Add to Cart</button>

          {/* Delivery Info */}
          <div className="border border-gray-200 rounded  gap-0 divide-y divide-gray-200 flex  flex-col ">
            <div className="flex gap-4 p-4 items-center">
              <FaTruck className="text-2xl" />
              <div>
                <p className="font-medium">Free Delivery</p>
               <p className="font-normal text-sm">{data?.shippingInformation}</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 items-center">
              <FaUndo className="text-2xl" />
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-sm text-gray-500">
                   {data?.returnPolicy}
                </p>
              </div>
            </div>
          </div>







        </div>

      </div> 
    </div>
    <ReleatedProduct data = {data?.category} idx={id}/>
    <Footer/>
    </>
  );
};

export default ProductDetails;
