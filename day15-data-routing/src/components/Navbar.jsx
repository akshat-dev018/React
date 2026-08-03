import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'services'}>Services</NavLink>
    </div>
  )
}

export default Navbar

// navlink is a part of react router jo sirf router ke ander chlta hai