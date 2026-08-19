import axios from 'axios'
import { useEffect, useState } from 'react'
import type {Product} from "./types"
import ProductCard from './components/CardProduct'


const App = () => {
  const [productsData, setProductsData] = useState<Product[]>([])

  const getData = async ()=>{
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProductsData(response.data);
        } catch (error) {
      console.log("error in api",error)
    }
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
      {
        productsData.map((val)=><ProductCard key={val.id} product={val} />)
      }
    </div>
  )
}

export default App