import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {

      let navigate = useNavigate();

      const {loggedInUser, setLoggedInUser , registeredUsers} = useContext(Auth);

      let {register,handleSubmit, reset , formState:{errors}} = useForm()
    
    
        let formSubmit = (data)=>{
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

        

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Login to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)}
        className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
            {...register("email",{
              required:"Email is required"
            })}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-black"
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
            {...register("password",{
              required:"Password is required",
              minLength:{
                value:6,
                message:"minimum 6 characters is required"
              }
            })}
              type="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-black"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>


          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <button onClick={()=>navigate('/register')}
          className="text-blue-600 font-semibold hover:underline cursor-pointer">
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;