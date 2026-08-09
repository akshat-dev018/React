import { useNavigate } from "react-router"
import {useForm} from 'react-hook-form'
import { loginUserApi } from "../api/authApi";
import {useDispatch} from "react-redux"
import {addUser} from "../state/authSlice"
import {toast} from "react-toastify"


export const useAuthHook = ()=>{
    let navigate = useNavigate();
    let dispatch = useDispatch();


    let {register,handleSubmit,reset , formState:{errors}} = useForm()

     const registerForm = (data)=>{
        console.log("registeer",data);
     };

     const loginForm = async (data)=>{
        // api call
        try{
            let response = await loginUserApi(data);
            dispatch(addUser(response));
            toast.success("user loggedIn")
        }catch (error){
            console.log("form api error",error);
        }
     };


    return {
        navigate,register,
        handleSubmit,reset,
        errors,registerForm,
        loginForm,
    }
}