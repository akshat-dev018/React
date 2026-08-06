import React from 'react'
import  { useState } from "react";
import { useAuth } from '../hooks/authHooks';


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  
    let {navigate,register,handleSubmit,errors,loginForm} = useAuth();

    
  

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Welcome Back 👋</h1>
          <p className="text-gray-500 mt-2">
            Sign in to continue to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loginForm)}
        className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
             {...register("email",
              {required:"Email is required"}
            )}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-black"
            />
          {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <div className="relative">
              <input
                 {...register('password',
                {required:'password is required',
                  minLength:{
                    value:8,
                    message:"Minimum 8 characters are required"
                  },
                }
              )}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-16 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-black
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-indigo-600 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
           {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-indigo-600" />
              <span className="text-gray-600">Remember me</span>
            </label>

            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-lg transition duration-300"
          >
            Login
          </button>
        </form>


        {/* Register */}
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <span onClick={()=> navigate('/register')}
          className="text-indigo-600 font-semibold cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;


