import React, { Children } from 'react'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {

let IsAdmin = false;

if(!IsAdmin){
    console.log("hey i am running")
    alert("You are not an admin")
   return <Navigate to={"/"} />
}

  return children;
}

export default ProtectedRoute
