import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './Components/Navbar'
import Services from './pages/Services'
import Contact from './pages/Contact'
const App = () => {
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>

  )
}

export default App