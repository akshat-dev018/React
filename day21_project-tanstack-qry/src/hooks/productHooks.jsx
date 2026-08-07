import { useQuery } from '@tanstack/react-query'
import { getProductsDataApi } from '../api/ProductApi'

export const useProductApi = ()=>{
    let {data,isPending,error} = useQuery({
      queryKey:['products'],
      // key isliye jaa rhi hai kyuki hume hr api ko seperate rkhna hai
      queryFn:getProductsDataApi,
      // queryFn is tumhare api call wla func
      staleTime:5000,
      // ye cache krle products ko ab hr 5sec baad api call hogi
})
    return{
        data,isPending,error
    }

}