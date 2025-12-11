import React from 'react'
import Header from "../components/Header"
import Navbar from '../components/Navbar'
import FormContainer from '../components/FormContainer'
import LeftFormImage from '../components/LeftFormImage'
import Footer from '../components/Footer'
const Login = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className="container flex justify-between gap-50  items-center my-10  h-full w-[90%] ">
        <div className="left w-[60%] h-[500px]">
          <LeftFormImage/>
        </div>
        <div className="right w-[40%]">
            <FormContainer role={'login'} title={'Create an account'} description = {'Log in to Exclusive'}/>
            {/* <Form role={'signup'} title={'Create an account'} description = {'Enter your details below'} /> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
