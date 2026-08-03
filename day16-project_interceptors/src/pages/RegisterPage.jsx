import React from "react";
import { Auth } from "../context/AuthContext";
import { useAuthHooks } from "../hooks/useAuthHooks";


const RegisterPage = () => {

  console.log("register page rendering");

  let {register,handleSubmit,registerFormSubmit,errors,navigate,isValid} = useAuthHooks();


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Register to get started
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(registerFormSubmit)}
        className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
            {...register("name",{
              required:"Name is required"
            })}
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-black"
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>

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

          {/* Register Button */}
          <button
          disabled={!isValid}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <button onClick={()=>navigate('/')}
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
