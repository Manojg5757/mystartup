import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { languageToggle } from '../store/productSlice'
import logo from '../assets/logo.png'

const Navbar = () => {
 
  const dispatch = useDispatch()
  const languageTitle = useSelector(state=>state.product)
  console.log(languageTitle)

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
        <li className='cursor-pointer' onClick={()=>dispatch(languageToggle())}>
          {languageTitle ? "தமிழ்": "English"}
        </li>
        
      </ul>
      </div>
      <div>
        
      </div>
    </header>
  )
}

export default Navbar