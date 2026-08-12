import React from 'react'
import { useAllProduct, useProductByCategory } from '../../hooks/useProductHook'
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';

const ProductPage = () => {

  let {data,isPending,search,setSearch} = useAllProduct();

  let {data: productByCategory,category,setCategory} = useProductByCategory();
  console.log("this is productByCategory ",productByCategory);

  if(isPending) return <h1>Loading Products..</h1>

  return (
    <div>
      <Filter category={category} setCategory={setCategory}
       search={search} setSearch={setSearch} />
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
      productByCategory?.products.length?
      // productByCategory?.products.length? => 0 ayega initially load krne pe 
        productByCategory?.products.map((val)=>(<ProductCard key={val.id} product={val} />
        )) : 
        data?.data?.products.map((val)=>(<ProductCard key={val.id} product={val} />
        ))
      }
    </div>
    </div>
  )
}

export default ProductPage
