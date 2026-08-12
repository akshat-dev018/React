import {useQuery} from "@tanstack/react-query"
import { getAllProductApi, getProductByCategory, getProductsCategories } from "../api/productApi"
import { useEffect, useState } from "react";

export const useAllProduct = ()=>{

    const [search, setSearch] = useState(null);
    const [debounceSearch, setDebounceSearch] = useState(null);

    useEffect(() => {
      let timeout = setTimeout(() => {
            setDebounceSearch(search)
        }, 1000);
        return ()=> clearTimeout(timeout);
    }, [search])
    

    let {data,isPending,error} = useQuery({
        queryKey:["products",debounceSearch],
        queryFn:()=>getAllProductApi(debounceSearch),
    });
    // ye queryKey ek trh se useeffect ki trh hai , yaha pe search pe dependency hai

    console.log("products data",data);

     return{
        data,isPending,error,
        search,setSearch,
     };
};

export const useAllCategories = ()=>{
     return useQuery({
        queryKey:["AllCategories"],
        queryFn: getProductsCategories,
    });
}


export const useProductByCategory = ()=>{
    const [category, setCategory] = useState(null)
    console.log("ye category hai",category);

    let {data} = useQuery({
        queryKey:["ProductsByCategory",category],
        queryFn:()=>getProductByCategory(category),
    })
    return{
        data,category,setCategory
    }
}