import React from 'react'
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import {  Route, Routes } from "react-router";
import Detail from "../Pages/Detail";
import NestedAbout from '../Pages/NestedAbout';

const AppRoutes = () => {
  return (
         <div>
           <Routes>
             <Route path="/" element={<Home />}>
             <Route path="detail" element={<Detail />}  />
             </Route>
             <Route path="/about" element={<About />}>
              <Route path='nested' element={<NestedAbout />} />
             </Route>
             <Route path="/contact" element={<Contact />} />
           </Routes>
         </div>
  )
}

export default AppRoutes
