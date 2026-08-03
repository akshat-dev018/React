import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {

  const [singleProductData, setSingleProductData] = useState({});
  console.log(singleProductData)

  let {id} = useParams();
  // The useParams Hook allows you to access dynamic values from the URL in React Router.
  // The URL /post/:id means that the value for id is dynamically passed and can be accessed via useParams.
  let getSingleProductData = async ()=>{
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProductData(res.data);
    } catch (error) {
      console.log("Detail api error",error)
    }
  }

  useEffect(() => {
    getSingleProductData()
  }, [])
  

  return (
   <div className="min-h-[90%] bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="grid md:grid-cols-2 gap-10 p-8">

          {/* Left Section */}
          <div className="flex justify-center items-center bg-gray-50 rounded-xl p-8">
            <img
              src={singleProductData.image}
              alt={singleProductData.title}
              className="h-[250px] object-contain hover:scale-105 duration-300"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between">

            <div>
              <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full capitalize">
                {singleProductData.category}
              </span>

              <h1 className="text-4xl font-bold mt-4">
                {singleProductData.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-yellow-500 text-xl">
                  ⭐⭐⭐⭐⭐
                </span>

                <span className="text-gray-600">
                  {singleProductData.rating?.rate || 4.5}
                </span>

                <span className="text-gray-400">
                  ({singleProductData.rating?.count || 120} Reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-4xl font-bold text-green-600">
                  ${singleProductData.price}
                </span>

                <span className="text-lg text-gray-400 line-through">
                  ${(singleProductData.price * 1.4).toFixed(2)}
                </span>

                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                  30% OFF
                </span>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">
                  Description
                </h2>

                <p className="text-gray-600 leading-7">
                  {singleProductData.description}
                </p>
              </div>
            </div>

             

              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition">
                Add to Cart
              </button>

              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>
  )
}

export default ProductDetail
