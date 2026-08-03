import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Bannar from './Components/Bannar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <Bannar/>
  </StrictMode>,
)
