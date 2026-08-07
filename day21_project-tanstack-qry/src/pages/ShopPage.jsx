import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../components/ProductCardSkeleton'
import { useProductApi } from '../hooks/productHooks'



const ShopPage = () => {

  let {data,isPending,error} = useProductApi()

  if(error) return <h1>{error.message}</h1>
 


  return (
  
    <div className="min-h-screen bg-black p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {isPending
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

      </div>
    </div>
  

      
  )
}

export default ShopPage


// tanstack query ka use isliye krte hai kyuki bina uske br br api call ho rhi thi 
// hum jb bhi dusre tab mein ja rhe the aur fir shop pe aa rhe the
//  br br api call ho rhi thi isko rokne ke liye tanstack kaam aata hai 
// na tumhe state ki need hui update krne ke liye na loading ki need padi na useEffect ki