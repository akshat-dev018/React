import { keepPreviousData, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getAllProducts } from './api/productApi'
import ProductCard from './components/ProductCard';

// PAGINATION THROUGH TANSTACK QUERY
const TanStack = () =>{

    let limit = 10;

    const [page, setPage] = useState(null);

    let {data ,isPending , isError , isPlaceholderData } = useQuery({
        queryKey:['products',page], // ye TANSTACK query ka dependency array hota hai
        queryFn:()=>getAllProducts(limit,page), 
        placeholderData:  keepPreviousData, // jb tk tuhmhare next data render honge ye tumhara prev data hold rkhega  
    });

    if(isPending) return "Loading..";
    if(isError) return "Something Went Worng";

    console.log(data);

    let totalPages = Math.ceil( data.total/limit )

    return(
          <div className='flex flex-col gap-6 items-center'>
         <div style={{opacity:isPlaceholderData?0.3 :  1}}
         className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        data?.products.map((val)=> <ProductCard key={val.id} product={val} />
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

export default TanStack

// ab dikkat ye aa rhi jb jb next page pe jaa rha hun main toh page re render ho rha aur mai top pe chla jaa rha
// now to solve this tanstack has prev data  