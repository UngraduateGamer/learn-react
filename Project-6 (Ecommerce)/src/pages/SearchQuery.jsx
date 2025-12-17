import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductDetails from './ProductDetails'
import ShowCategory from './ShowCategory'
import ShowProducts from '../components/ShowProducts'

const SearchQuery = () => {
    const [data,setData] = useState([]);
    const [temp,setTemp] = useState([]);
    const {query} = useParams();
   
    useEffect(()=>{
        async function getData(){
            const result = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
            setData(result.data.products)
        }
        getData()
    },[query])
   
    useEffect(()=>{
        async function randomData(){
            const result = await axios.get("https://dummyjson.com/products/category/mobile-accessories");
            setTemp(result.data.products)
        }
        randomData()
    },[query])
  return (
    <div>
        <Header/>
            <Navbar/>
            <ShowProducts data={data.length > 0 ? data : temp} msg={data.length < 1 && "Sorry we coult not find your request." }/>
        </div>
  )
}

export default SearchQuery