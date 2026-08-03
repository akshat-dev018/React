import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayouts = () => {
  return (
    <div className='p-4 flex flex-col gap-9'>
      <nav className='flex text-3xl gap-6'>
        <NavLink to={"/"}>App</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default MainLayouts
