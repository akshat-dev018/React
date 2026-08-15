import axios from 'axios';

// export const getAllProducts = async (limit,page=1)=>{
//     try {
//         let response = await axios.get(`https://dummyjson.com/products? ${limit }&skip=${page*limit}`);
//         return response.data;
//     } catch (error) {
//         console.log("error in product api",error)
//     }
// }

export const getAllProducts = async (limit,pageParam )=>{
    try {
    console.log("page param=>",pageParam)
        let response = await axios.get(`https://dummyjson.com/products?limit=${limit }&skip=${pageParam}`);
        return response.data;
    } catch (error) {
        console.log("error in product api",error)
    }
}