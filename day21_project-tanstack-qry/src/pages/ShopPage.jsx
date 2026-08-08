import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../components/ProductCardSkeleton'
import { useProduct, useProductApi } from '../hooks/productHooks'
import Filters from '../components/Filters'



const ShopPage = () => {

  // let {isPending,error,filteredProducts} = useProductApi()

  // if(error) return <h1>{error.message}</h1>

  let {isLoading,filteredProducts , filterProducts} = useProduct()
 


  return (
  
    <div className="min-h-screen bg-black p-10">
      <Filters filterProducts={filterProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : filteredProducts?.map((product) => (
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
// na tumhe state ki need hui update krne ke liye na loading ki need padi na useEffect k