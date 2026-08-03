import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {

    const {loggedInUser} = useContext(Auth)

    if(!loggedInUser){
  return <Navigate to={'/'} />
    }

    return <Outlet/>
    // yha pe Outlet jo children recive kr rha hai wo hai main layout
}

export default ProtectedRoute
