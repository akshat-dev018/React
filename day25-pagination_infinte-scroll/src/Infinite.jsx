 import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllProducts } from './api/productApi'
import ProductCard from './components/ProductCard';


const Infinite = () =>{

   let limit = 50;

    let{data,isPending,fetchNextPage,hasNextPage,isFetchingNextPage} =useInfiniteQuery({
        queryKey:["products"],
        queryFn: ({pageParam})=> getAllProducts(limit,pageParam),
        initialPageParam:2, 
        getNextPageParam:(lastPage,allPage)=>{
             let loadedData = allPage.length * limit;
             // abhi pages kitne 1 toh sarein pages ki length kitni hogi 1 toh 1*10 = 10 data will be shown
             if(loadedData<lastPage.total ) return loadedData;
             return undefined; 
        }
    });

    if(isPending) return "Loading..";
    console.log(data);
     
    let allProducts = data?.pages?.flatMap(val=>val.products) ?? [];

    return(
          <div className='flex p-5 flex-col gap-6 items-center'>
         <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                allProducts.map((val)=> <ProductCard key={val.id} product={val} />)
            }         
    </div>
            {
                 hasNextPage && 
                 <button onClick={()=>fetchNextPage()} >{isFetchingNextPage?"Loading.." : "Load More"}</button>

            }
    </div> 
    )
}

export default Infinite

