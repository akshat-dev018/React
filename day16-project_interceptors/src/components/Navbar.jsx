import React, { useContext } from 'react'
import { Navigate, NavLink, useLocation } from 'react-router'
import { Auth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {

  const{setLoggedInUser} = useContext(Auth);

  let routerLocation = useLocation();
  console.log(routerLocation);

  return (
    <div className='border-r border-gray-500 flex flex-col justify-between  p-3'>
    
    <div className='flex flex-col gap-10'>
        <h1 className='text-3xl font-semibold'>E-comm</h1>

    <div className='flex flex-col gap-4 ml-5'>
      <NavLink className={({isActive})=>
      isActive ?
      "font-semibold text-red-600 border-b border-gray-500 flex items-center justify-center":
      "text-white border-b border-gray-500 flex items-center justify-center "
    } 
      to={'/main'} end>Home</NavLink>

      <NavLink className={({isActive})=>
      isActive ?
      "font-semibold text-red-600 border-b border-gray-500 flex items-center justify-center":
      "text-white border-b border-gray-500 flex items-center justify-center "} 
      to={'/main/users'}>Users</NavLink> 

      <NavLink className={({isActive})=>
      isActive ?
      "font-semibold text-red-600 border-b border-gray-500 flex items-center justify-center":
      "text-white border-b border-gray-500 flex items-center justify-center "}
       to={'/main/product'}>Product</NavLink>

    </div>

    </div>

    <button onClick={()=>{
      localStorage.removeItem("loggedinUser");
      toast.warn("User logged out")
      setLoggedInUser(null);
    }}
    className='py-3 bg-red-600 text-white rounded cursor-pointer'>
      Logout</button>

    </div>
  )
}

export default Navbar

// "isActive" batati hai ki current tab open hai ya nhi

// home mein red humesha active tha kyuki path main hai ..
// agr uss mein se bhi hta na hai toh hum "end" ka use krenge 

// tumhe jb janna hai ki kaun route ka path jo hai currently on hai 
// tb tum log use kroge uselocation() hook