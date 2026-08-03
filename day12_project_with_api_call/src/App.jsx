import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductsCard'
import Cart from './pages/Cart'
import { MyStore } from './Context/MyContext'

const App = () => {

  let {isCartOpen , cartItems} = useContext(MyStore)

  const [productsData, setProductsData] = useState([]);
 
 

  const getProductsData = async ()=>{
    try {
      let resp = await axios.get('https://fakestoreapi.com/products')
      setProductsData(resp.data);
    } catch (error) {
      console.log("error in api",error);
    }
  }

 useEffect(() => {
  getProductsData();
 }, [])
 

  return (
    <div className='h-screen p-2 flex flex-col gap-4'>
      <Navbar />

      {
      isCartOpen ?
          ( <div className=''>
            <Cart />
          </div>)
          :
          ( <div className='grid grid-cols-4 gap-4'>
            {productsData.map((elem)=>{

            let isInCart = cartItems.find((val)=> val.id===elem.id);
            console.log(isInCart);

            return <ProductCard
               key={elem.id}
               product={elem}
               isInCart={isInCart}/>
          })}
      </div>
    )}
    </div>
  )
}

export default App


