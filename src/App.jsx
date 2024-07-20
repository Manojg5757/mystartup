import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Offer from './pages/Offer'
import About from './pages/About'
import Store from './pages/Store'
import Navbar from './components/Navbar'
import { FaArrowAltCircleUp } from "react-icons/fa";
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar  />
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
        <Route path='/offer' element={<Offer />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App