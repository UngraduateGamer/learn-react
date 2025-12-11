import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Todays from '../components/Todays'
import ByCategory from '../components/ByCategory'
import ThisMonth from '../components/ThisMonths'
import MusicExperience from '../components/MusicExperience'
import OurProduct from '../components/OurProduct'
import Featured from '../components/Featured'
import Tags from '../components/Tags'
import Footer from '../components/Footer'
import { CategoryContext } from '../context/CategoryProvider'
import axios from 'axios';
const HomePage = () => {
  const [categories,setCategories] = useState([]);
  useEffect(()=>{
    async function getCategory(){
    const {data} = await axios.get("https://dummyjson.com/products/categories");
    setCategories(data);
  }
      getCategory()
},[])

  return (
<div className='relative'>

    <Header/>
    <Navbar/>
    <HeroSection categories = {categories}/>
    <Todays/>
    <ByCategory categories = {categories} />
    <ThisMonth/>
    <MusicExperience/>
    <OurProduct/>
    <Featured/>
    <Tags/>
    <Footer/>
</div>
)
}

export default HomePage