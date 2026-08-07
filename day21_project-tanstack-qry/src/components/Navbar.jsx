import React from 'react'
import {NavLink} from 'react-router'
import { LogOut } from 'lucide-react';



const Navbar = () => {
  return (
    <div className='flex justify-between p-4 items-center'>
      <h1>Skydart</h1>

    <div className='flex gap-5 text-xl'>
        <NavLink className={
          ({isActive})=>{return isActive? "text-yellow-500":"";}}
        to={'/main'} end >Home</NavLink>

        <NavLink className={
          ({isActive})=>{return isActive? "text-yellow-500":"";}}
        to={'/main/shop'}>Shop</NavLink>

        <NavLink className={
          ({isActive})=>{return isActive? "text-yellow-500":"";}}
        to={'/main/about'}>About</NavLink>
    </div>

    <div className='flex gap-8 items-center '>
        <h1>Hey,<strong className='text-yellow-600'>Dev</strong></h1>
        <button>Cart</button>
        <LogOut size={20} className='cursor-pointer' />
    </div>

    </div>
  )
}

export default Navbar
