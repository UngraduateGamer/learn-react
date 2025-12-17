import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
export const CategoryContext = createContext();
const CategoryProvider = (props) => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
    async function getCategory(){
        const data = await axios.get("https://dummyjson.com/products/categories");
        setCategories(data);
    }
    getCategory()
    },[])
  return (
    <CategoryContext  value={categories}>
    {props.children}
    </CategoryContext>
  )
}

export default CategoryProvider