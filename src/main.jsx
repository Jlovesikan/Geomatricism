import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'          // Home page
import About from './Components/AboutComponent/about.jsx' // About page
import Service from './Components/ServicePage/service.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
