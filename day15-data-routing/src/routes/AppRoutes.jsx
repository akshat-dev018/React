import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
import MainLayout from "../layout/MainLayout"
import AuthLayout from "../layout/AuthLayout"


const AppRoutes = () => {

    let router = createBrowserRouter([
      // ek hi page pe different cheze render krna 
        {
          path:'/',
          element:<MainLayout/>,
          children:[
             {
              path:'',
              element:<Home/>
            },
            {
              path:'about',
              element:<About/>
            },
              {
              path:'services',
              element:<Services/>
            },
          ],
        },
        // ek complete different page 
         {
              path:'/auth',
              element:<AuthLayout/>
            }

    ])

  return (
  <RouterProvider router={router} />)
}

export default AppRoutes

