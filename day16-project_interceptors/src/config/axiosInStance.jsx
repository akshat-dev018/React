import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com"
});

// jb api call ko beech mein rokna ho => interceptors
// they are of 2 type => Request , Response

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("in interceptors ->",response);
        return response;
    },
    (error)=>{
        console.log(error);
    }
)

// axiosInstance.interceptors.request.use(
//     ()=>{},
//     ()=>{}
// )