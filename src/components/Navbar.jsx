import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { languageToggle } from '../store/productSlice'
import logo from '../assets/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
 
  const dispatch = useDispatch()
  const languageTitle = useSelector(state=>state.product)
  console.log(languageTitle)

  const handleLangToggle = ()=>{
    dispatch(languageToggle())
    toast.success(languageTitle ? "தமிழிற்கு மாற்றப்பட்டது" : "Changed to english",{
      position:'top-right',
      autoClose:1000
    })
  }

  return (
    <header id='top' className='shadow-md bg-white p-3 sticky z-20 top-0'>
      
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
      <Link to='/'>
      <img src={logo} className='h-[50px] w-[50px] rounded-full border-2 border-blue-300'  alt="" />
      </Link>
      <ul className='flex gap-4'>
        <li>
          <Link to='/store'>{languageTitle ? "Store" : "கடை"}</Link>
        </li>
        <li>
          <Link to='/offer'>{languageTitle ? "Offer" : "சலுகை"}</Link>
        </li>
        <li className='cursor-pointer' onClick={handleLangToggle}>
          {languageTitle ? "தமிழ்": "English"}
        </li>
        
      </ul>
      </div>
      <div>
        
      </div>
      <ToastContainer />
    </header>
  )
}

export default Navbar