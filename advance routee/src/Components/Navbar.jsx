import React, { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeDataContext from '../Context/ThemeDataContext'
const Navbar = () => {
  const data = createContext(ThemeDataContext);
  console.log(data)
  return (
    <div className='bg-blue-300'>
        <ul className='w-[80%] mx-auto flex justify-between p-5'>
            <div className="flex">
            <li to="/"><Link className='text-2xl  Link font-bold'>Your Logo</Link></li>
            </div>
            <div className="flex gap-5">
                <li><Link to="/" className='text-lg  Link font-semibold'>Home</Link></li>
                <li><Link to="/about" className='text-lg  Link font-semibold'>About</Link></li>
                <li><Link to="/contact" className='text-lg  Link font-semibold'>Contact</Link></li>
                <li><Link to="/products" className='text-lg  Link font-semibold'>Products</Link></li>
                <li><Link to="/courses" className='text-lg  Link font-semibold'>Courses</Link></li>
            </div>
        </ul>
    </div>
  )
}

export default Navbar