import React from 'react'
import {Route,Routes} from "react-router"
import Home from "../page/Home";
import About from "../page/About";
import Product from "../page/Product";
import ProductDetail from "../page/ProductDetail";
import ProtectedRoute from './ProtectedRoute';


const AppRoutes = () => {
  return (
    <div>
          <Routes>
            <Route path='/' element={<Home />}  />

            <Route path='/about' element={
              <ProtectedRoute>
                <About />
            </ProtectedRoute>}  />

            <Route path='/product' element={<Product />}  />
            <Route path='/detail/:id' element={<ProductDetail />}  />
          </Routes>
    </div>
  )
}

export default AppRoutes
