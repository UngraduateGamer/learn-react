import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './context/ProductProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import CategoryProvider from './context/CategoryProvider.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='111304639350-bcc6inqhjobm9524ba0roakmg29oavn6.apps.googleusercontent.com'>
  <BrowserRouter>
    <ProductProvider>
      <CategoryProvider>
  
      <App />
      </CategoryProvider>
    </ProductProvider>
  </BrowserRouter>
  </GoogleOAuthProvider>
)
