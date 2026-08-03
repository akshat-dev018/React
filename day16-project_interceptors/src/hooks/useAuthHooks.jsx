import {  useContext } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

export const useAuthHooks = ()=>{

    const { setLoggedInUser , registeredUsers,setRegisteredUsers} = useContext(Auth);

       let navigate = useNavigate();
    
            let {register,handleSubmit, reset , formState:{errors,isValid}} = useForm()
          
        //   login ka logic
              let loginFormSubmit = (data)=>{
                console.log(data);
                let user = registeredUsers.find((val)=>{
                  return val.email === data.email && val.password === data.password
                })
    
                if(!user){
                toast.error("invalid creds or user not found");
                reset();
                return;
              }
    
              setLoggedInUser(user);
              localStorage.setItem("loggedinUser",JSON.stringify(user));
              toast.success("user loggedIn")
              navigate("/main")
    
                reset();
              }

            //   register ka logic
         let registerFormSubmit = (data)=>{
            console.log(data); //data mein mere naye users aa rhe hai
            let arr = [...registeredUsers,data]
            setRegisteredUsers(arr);
            alert("user registered successfully");
            setLoggedInUser(data) // direct register se main mein jaane hai 
            localStorage.setItem('registeredUsers',JSON.stringify(data))
            localStorage.setItem('registeredUsers',JSON.stringify(arr))
            navigate("/main")
             reset();
    } 

    return {
        navigate,
        register,handleSubmit,errors,reset,
        isValid,loginFormSubmit,registerFormSubmit
    }
}