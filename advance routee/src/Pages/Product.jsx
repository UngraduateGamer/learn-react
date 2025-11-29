import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div className='centering flex flex-col relative'>
        <div className="top flex items-center justify-center gap-10 w-full h-10 absolute top-10">
            <Link className='text-lg' to='mens'>Men's Collections</Link>
            <Link className='text-lg' to='womens'>Women's Collections</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product