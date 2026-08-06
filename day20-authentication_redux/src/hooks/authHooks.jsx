import {useNavigate} from 'react-router'
import {useForm} from 'react-hook-form'
import { useState } from 'react';
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
import {addUser} from '../features/authSlice'


export const useAuth = ()=>{
     let navigate = useNavigate();

     let dispatch = useDispatch();

     const [registeredUsers, setRegisteredUsers] = useState(
      JSON.parse(localStorage.getItem("registeredUsers")) || []
   );

     let {register,handleSubmit,reset , formState:{errors}} = useForm()

     const registerForm = (data)=>{
      let arr = [...registeredUsers,data];
      toast.success("user registered..")
      setRegisteredUsers(arr);
      localStorage.setItem("registeredUsers",JSON.stringify(arr));
     };

     const loginForm = (data)=>{
      let user = registeredUsers.find((val)=>{
         return val.email === data.email && val.password === data.password
      })

      if(!user){
         toast.error("Invalid something");
         return;
      }

      // ab hume is user ko redux mein update krna hai
      dispatch(addUser(user));
      localStorage.setItem("loggedInUser",JSON.stringify(user));
      toast.success("user logged in")

      reset();

     };

     return {
        navigate,register,
        handleSubmit,reset,
        errors,registerForm,
        loginForm,
     }

}


// abhi load krne pe saara data chla jayega kyuki
// redux apne ander cheze yaad nhi rkh skta isliye tumhe hydration krna hota hai
// tumhe hr br hr reload pe ek func chlana padega jo tumhe loggedin user dega