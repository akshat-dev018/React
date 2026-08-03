import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { axiosInstance } from '../config/axiosInStance';

const ProductPage = () => {

  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  let getProductsData = async ()=>{
    try {
      let resp = await axiosInstance.get('/products');
      console.log("Product api->",resp);
      console.log(resp.data);
      setProductData(resp.data);
      setIsLoading(false);
    } catch (error) {
      console.log("products api error",error)
    }
  }

  useEffect(() => {
    getProductsData()
  }, [])

  if(isLoading) return <h1 className='text-5xl'>Products are loading</h1>
  

  return (
    <div className='grid grid-cols-4 gap-5'>
      {
        productData.map((val)=>(<ProductCard key={val.id} product={val} />

        ))}
    </div>
  )
}

export default ProductPage
