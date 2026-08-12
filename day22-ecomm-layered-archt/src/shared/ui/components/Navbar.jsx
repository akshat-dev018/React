import React from 'react'
import { NavLink } from 'react-router'
import { ShoppingCart , Box } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex items-center gap-5 justify-between py-4 px-10'>
        
        <h1>Logo</h1>

        <div className='flex items-center gap-10 text-xl'>
            <NavLink className={({isActive})=>isActive? "text-red-600" : "text-white"}
             to={'/main'} end>Home</NavLink>

            <NavLink className={({isActive})=>isActive? "text-red-600" : "text-white"}
            to={'/main/product'}>Shop</NavLink>

            <NavLink className={({isActive})=>isActive? "text-red-600" : "text-white"}
             to={'/main/about'}>About</NavLink>
        </div>

        <div className='flex items-center gap-6'>
            <NavLink className={({isActive})=>isActive? "text-red-600" : "text-white"}
             to={'/main/cart'}>
             <ShoppingCart/>
            </NavLink>
            <NavLink className={({isActive})=>isActive? "text-red-600" : "text-white"}
             to={'/main/order'}>
             <Box/>
            </NavLink>
        <button className='px-5 py-1 rounded cursor-pointer text-white bg-red-700'>LogOut</button>
        </div>


    </div>
  )
}

export default Navbar
