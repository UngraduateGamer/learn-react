import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductProvider'
import { NavLink } from 'react-router-dom'
const LeftSide = ({categories}) => {
  return (
    <div className='w-full py-10 border-r-2 border-[#00000021] '>
        <div className='flex flex-col gap-3 '>
         {
          categories.slice(0,9)?.map((elem,idx)=>{
            return <NavLink key={idx}  className="hover:text-[#db4444] active:scale-95 " to={`/products/category/${elem.slug}`}>{elem.name}</NavLink>
          })
         }
        </div>
    </div>
  )
}

export default LeftSide