import axios from 'axios';

const getAllProducts = async ()=>{
    try {
        let response = await axios.get('https://dummyjson.com/products');
        return response.data;
    } catch (error) {
        console.log("error in product api",error)
    }
}