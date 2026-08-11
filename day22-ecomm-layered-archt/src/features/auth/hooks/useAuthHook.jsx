import { useNavigate } from "react-router"
import {useForm} from 'react-hook-form'
import {useDispatch} from "react-redux"
import {toast} from "react-toastify"
import { loginUserAtion } from "../state/authActions";


export const useAuthHook = ()=>{
    let navigate = useNavigate();
    let dispatch = useDispatch();


    let {register,handleSubmit,reset , formState:{errors}} = useForm()

     const registerForm = (data)=>{
        console.log("register",data);
     };

     const loginForm = async (data)=>{
        // api call
        try{
             dispatch(loginUserAtion(data));
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