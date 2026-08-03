import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  
  console.log("auth layout rendering")

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
