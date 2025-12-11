import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PageNotFound = () => {
  return (
    <div>
        <Navbar/>

	<div className="flex flex-col h-screen w-full bg-white">
		 
		
		
            <div className="img404 flex items-center justify-start flex-col gap-5 "
            >
			<h1 className="text-center font-semibold text-8xl mt-10">404</h1>
            
            </div>
            <div className=' relative bottom-18  flex flex-col justify-center items-center gap-3'>

		<h3 className="text-5xl font-medium">
		Look like you're lost
		</h3>
		<p className='text-md'>the page you are looking for not avaible!</p>
		<NavLink to="/" className="active:!scale-95 bg-[#39ac31] text-white text-sm rounded  px-5 py-3">Go to Home</NavLink>
            </div>
	
	</div>
<Footer/>
    </div>
  )
}

export default PageNotFound