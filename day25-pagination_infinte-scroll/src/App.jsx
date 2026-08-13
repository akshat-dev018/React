import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './components/ProductCard';

const App = () => {

  const [products, setProducts] = useState(null);
  console.log(products)

  const getAllProducts = async ()=>{

    let limit = 30;

    try {
        let response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
        setProducts(response.data)
    } catch (error) {
        console.log("error in product api",error)
    }
}

useEffect(()=>{
  getAllProducts();
},[])

  return (
    <div 
    className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        products?.products.map((val)=> <ProductCard key={val.id} product={val} />
      )
      }
      <div>
        <button>Prev</button>
      </div>
    </div>
  )
}

export default App
