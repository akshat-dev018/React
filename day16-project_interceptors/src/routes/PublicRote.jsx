import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {
    console.log("public route rendering")
    const {loggedInUser} = useContext(Auth)

    if(loggedInUser){
  return <Navigate to={'/main'} />
    }

    return <Outlet/>
    // yha pe Outlet jo children recive kr rha hai wo hai Authlayout
}

export default PublicRoute