import React, { lazy, Suspense } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import MainLayouts from "../layouts/MainLayouts"
import App from "../App"
import { getUsers } from '../apis/UserApis'
// code splitting
let About = lazy(()=>import("../pages/About"))
let Contact = lazy(()=>import("../pages/Contact"))


const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path:"",
            element: <MainLayouts/>,
            children:[
                {
                    path: "",
                    element: <App/>
                },
                {
                    path:"about",
                    loader: getUsers,
                    hydrateFallbackElement:<h1>Loading user data</h1>,
                    element: (
                        <Suspense fallback={<h1>Loading About</h1>} >
                            <About/>
                        </Suspense>
                    )
                },
                {
                    path:"contact",
                    element:(
                        <Suspense fallback={<h1>Loading Contact</h1>} >
                            <Contact/>
                        </Suspense>
                    )
                }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes

// CODE SPLITTING
// abhi dikkat ye aa rhi ki jb hum load kr rhe toh about aur contact bhi bekar mein aa rha
// web site slow ho skti hai agr multiple pages huye .. 
// iss chez ko solve krta hai "lazy" which is a react hook
// ye kya krta hai ye import ko promise mein convert kr dega ..
//  aur promise tn resolve hoga jb hum uss page pe jayenge

// suspense tb tk hold krke rkheg cheze jbtk about ki cheze aa nhi jati 
// maan lo about mein kuch aesa hai jo bht time le rha aane mein suspense tb tk suspense loading show krega


// Data Routing mein "loader" naam ki chez hoti hai jo tumhare element se pehle chl jati hai
// loader ke sath chlta hai "hydrateFallbackElement" iska mtlb hai jb tk data nhi aa rha koi element de do mujhe