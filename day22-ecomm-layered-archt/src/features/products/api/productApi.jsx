import {api} from '../../../config/api'

export const getAllProductApi = async (search)=>{
  try {
    let url = search? `/products/search?q=${search}` : "/products?limit=100"
    let response = await api.get(url);
    return response
  } catch (error) {
    console.log("error in getting all products api",error)
  }
}
// limit=100 this is query parameter .. issi pe tum pagination lgate ho

export const getProductsCategories = async ()=>{
   try {
    let response = await api.get('/products/categories');
    return response.data;
  } catch (error) {
    console.log("error in getting products category api",error)
  }
}

export const getProductByCategory = async (category)=>{
  try {
    let response = await api.get(`/products/category/${category}`);
    return response.data
  } catch (error) {
    console.log("error in getting product by category api",error)
  }
}