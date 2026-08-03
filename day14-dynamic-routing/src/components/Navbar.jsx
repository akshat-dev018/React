import React from 'react'
import { NavLink } from 'react-router';




const Navbar = ()=>{


  return (
    <div className='flex bg-black rounded p-5 items-center justify-between text-white'>
      <div>logo</div>
      <div className='flex gap-10 text-xl'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/product'}>Product</NavLink>

      </div>
      <button>Login</button>
    </div>
  )
};

export default Navbar