import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
     <div className='bg-blue-300 absolute w-full'>
        <ul className='w-[80%] mx-auto grid grid-cols-4 p-4 items-center justify-between'>
           <div className="col-1 flex flex-col gap-3 text-xs">
            <Link to="/" className='text-3xl Link  font-bold'>Your Logo</Link>
            <p className='text-xs w-[80%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, quos.</p>
           </div>
           <div className="col-2 flex flex-col gap-3 text-xs">
            <Link to="/explore" className='text-xl  Link  font-bold'>Explore</Link>
            <Link to="/underwater" className='Link'>Underwater</Link>
            <Link to="/sea-animal" className='Link'>Sea Animal</Link>
            <Link to="/scups-driving" className='Link'>Scubs Driving</Link>
           </div>
           <div className="col-3 flex flex-col gap-3 text-xs">
            <Link to="/links" className='text-xl Link  font-bold'>Links</Link>
            <Link to="/terms&Condition" className='Link'>Terms & Condition</Link>
            <Link to="/get-in-touch" className='Link'>Get In Touch</Link>
            <Link to="/news" className='Link'>News</Link>
           </div>
           <div className='col-4 flex flex-col gap-3 text-xs'>
            <Link to="/contact-us" className='text-xl  Link font-bold'>Contact Us</Link>
            <Link to="/location " className='Link'><MdLocationPin className='inline text-lg mr-1'/> 2553 Oaka, QA 2344</Link>
            <Link to="/phone " className='Link'><FaPhone className='inline text-lg mr-1'/> 0183-784-125</Link>
            <Link to="/mail " className='Link'><IoMail className='inline text-lg mr-1'/> dummy@dummy.com</Link>
           </div>
        </ul>
        <div className="copy-right w-[80%] mx-auto flex items-center justify-center my-10">
            <p>Copyright &copy; 2025 Dummy | Powered by Dummy</p>
        </div>
    </div>
  )
}

export default Footer