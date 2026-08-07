import { axiosInstance } from "../config/axiosInstance";

export let getProductsDataApi = async ()=>{
    try {
      let response = await axiosInstance.get("/products");
      console.log(response.data.products);
      return response.data.products;

    } catch (error) {
      console.log("error in products api",error)
    }
  }

//   axios ko tum kbhi direct use nhi kroge axiosInstance bna ke kroge
// jb kisi function ke aage async lg jata hai wo promise return krta hai 