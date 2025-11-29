import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'
import Mens from './Pages/Mens'
import Women from './Pages/Women'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'

const App = () => {
  return (
    <div className='bg-black h-screen w-full'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:id" element={<CourseDetails/>}/>
        <Route path="/products" element={<Product/>}>
          <Route path="mens" element={<Mens/>}/>
          <Route path="womens" element={<Women/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App