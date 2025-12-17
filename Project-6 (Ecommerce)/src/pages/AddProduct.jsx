import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [user,setUser] = useState({});
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("loggedInUser")))
    },[])
    const navigate = useNavigate('');
  return (
    <>
   {
    user?.role == 'admin' ? 

    <div>
        <form >
            <input type="text" />
        </form>
    </div> 

    : (navigate("/"))
   }
    </>
  )
}

export default AddProduct