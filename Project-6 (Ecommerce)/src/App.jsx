import React, { useContext } from 'react'
import { ProductContext } from './context/ProductProvider'
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import EditProfile from './pages/EditProfile';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import ShowCategory from './pages/ShowCategory';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/edit-profile" element={<EditProfile/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/products/category/:id" element={<ShowCategory/>} />
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  ) 
}

export default App