// import {api} from '../../../config/api'

// export const loginUserApi = async (credentials)=>{
//     try {
//         let response = await api.post('/auth/login',credentials);
//         console.log("response from login api",response);
//         localStorage.setItem('accessToken',response.data.accessToken);
//         return response.data;
//     } catch (error) {
//         console.log('error in login api',error);
//     }
// }

// hydrate user 
// export const hydrateUser = async ()=>{

//     let token = localStorage.getItem('accessToken')

//     try {
//         let response = await api.get('/auth/me',{
//             headers: {
//                 'Authorization': `Bearer ${token}`, 
//   },
//         });
//         console.log("response from hydration api",response);
//         return response.data;
//     } catch (error) {
//         console.log('error in hydration api',error);
//     }
// }

// get => getting data from server/backend
// post => sending data to server/backend
// patch/put => updating existing data
// delete => database se data delete krdo