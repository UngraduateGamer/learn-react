import React, { useEffect } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardAllInfo from '../components/CardAllInfo'
const ShowCategory = () => {
    const {id} = useParams()
    const [data,setData] = useState([]);
    useEffect(()=>{
        async function getData(){
            let url =  `https://dummyjson.com/products/category/${id}`;
            const result = await axios.get(url);
            setData(result.data.products)
        }
        getData();
    },[])
  return (
    <div>
        <Header/>
        <Navbar/>
        <div className="category flex w-[90%] mx-auto py-5 gap-10 relative">
            <div className="left w-[20%] bg-green-200 ">
              
            </div>
            <div className="right w-[80%]  ">
                <div className="card-container flex flex-wrap gap-3 relative ">
                  {
                      data.map((elem,idx)=>{
                          return <CardAllInfo  className={'shrink-0'} key={idx} data={elem} hidden={false}/>
                        })
                    }
                    </div>
            </div>
        </div>

    </div>
  )
}

export default ShowCategory