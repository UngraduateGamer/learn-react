import React from 'react'
import { ToastContainer,toast } from 'react-toastify'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './context/ProductProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import CategoryProvider from './context/CategoryProvider.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CartProvider } from './context/CartProvider.jsx'
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='111304639350-bcc6inqhjobm9524ba0roakmg29oavn6.apps.googleusercontent.com'>
  <BrowserRouter>
    <ProductProvider>
      <CategoryProvider>
      <CartProvider>
      <App />
      <ToastContainer
position="top-center"
autoClose={1000}
limit={1}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

  </CartProvider>
      </CategoryProvider>
    </ProductProvider>
  </BrowserRouter>
  </GoogleOAuthProvider>
)
