import React, { useEffect } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardAllInfo from '../components/CardAllInfo'

const CartPage = () => {
    useEffect(()=>{
        async function getData(){
            
            let data = await axios.get();
        }
    },[])
  return (
    <div>
        <Header/>
        <Navbar/>
        <div className='h-screen w-full '>
            <CardAllInfo data={data} hidden={false}/>
        </div>
        <Footer/>
    </div>
  )
}

export default CartPage