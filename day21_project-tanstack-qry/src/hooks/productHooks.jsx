import { useQuery } from '@tanstack/react-query'
import { getProductsDataApi } from '../api/ProductApi'
import { useEffect, useState } from 'react'

// ye tb ke liye jb hum api se connected honge
export const useProductApi = ()=>{

    const [filteredProducts, setFilteredProducts] = useState(null)

    let {data,isPending,error} = useQuery({
      queryKey:['products'],
      // key isliye jaa rhi hai kyuki hume hr api ko seperate rkhna hai
      queryFn:getProductsDataApi,
      // queryFn is tumhare api call wla func
      staleTime:5000,
      // ye cache krle products ko ab hr 5sec baad api call hogi
})

let filterProducts = (searchParams)=>{
    let filteredData = 
    data.filter((val)=>val.title.toLowerCase().includes(searchParams.toLowerCase()));
    console.log(filteredData);

    if(filteredData){
    setFilteredProducts(filteredData);
    }
};

    useEffect(() => {
    setFilteredProducts(data);
    }, [data]);

 

    return{
        data,isPending,
        error,filterProducts,
        filteredProducts,
    }

}

// ye jb hum khud se filter kga rhe 
export const useProduct = ()=>{
    const [productsData, setProductsData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let getProducts = async ()=>{
        let data = await getProductsDataApi();
        setProductsData(data);
        setFilteredProducts(data);
        setIsLoading(false);
    };

    let filterProducts = (searchParams)=>{
    let filteredData = 
    productsData.filter((val)=>val.title.toLowerCase().includes(searchParams.toLowerCase()));

    if(filteredData){
    setFilteredProducts(filteredData);
    }
    console.log(filteredData);
};

    useEffect(()=>{
        getProducts();
    },[]);

    return{
        productsData,setProductsData,
        isLoading, setIsLoading,
        filteredProducts,setFilteredProducts,
        filterProducts
    }




} 