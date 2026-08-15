 import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './components/ProductCard';

const App = () => {

  const [products, setProducts] = useState(null);
  // console.log(products);
  
  const [page, setPage] = useState(0);
  console.log(page)

  let limit = 10;
  
// PAGINATION NORMAL APPROACH
  const getAllProducts = async ()=>{

    try {
        let response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page*limit}`);
        setProducts(response.data)
    } catch (error) {
        console.log("error in product api",error)
    }
}

  let totalPages = Math.ceil(products?.total/limit);


useEffect(()=>{
  getAllProducts();
},[page])



  return (
     <div className='flex flex-col gap-6 items-center'>
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        products?.products.map((val)=> <ProductCard key={val.id} product={val} />
      )
      }
    </div>

        <div className='flex gap-5'>
        <button onClick={()=>setPage(page-1)}  disabled={page===0}
        className='p-3 bg-red-700 text-white rounded-xl'>Prev</button>
        <p>page {page+1} of {totalPages} </p>
        <button onClick={()=>setPage(page+1)} disabled={page>=totalPages-1}
        className='p-3 bg-red-700 text-white rounded-xl'>Next</button>
      </div>
       
    </div>
  )
}

export default App

// next page jb load ho rha tb api call ho rhi hai .. sath hi sath prev ke time pe bhi ho rhi .. 
// prev ke api calling ko rokna hoga => react ya state ismein kuch nhi kr skti 
// solution isko caching krna hoga jo ki tanstack query provide krta hai
