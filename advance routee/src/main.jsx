import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeDataContext from './Context/ThemeDataContext.jsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
  <BrowserRouter>
  <ThemeDataContext>
    <App />
</ThemeDataContext>
    </BrowserRouter>
    </StrictMode>,
)
