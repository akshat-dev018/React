import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {

  let navigate = useNavigate()

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
      
      {/* Image */}
      <div onClick={()=>navigate(`/detail/${product.id}`)}
      className="h-64 bg-gray-50 p-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">

        {/* Category */}
        <span className="w-fit px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-600 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="font-semibold text-gray-800 line-clamp-2 min-h-[50px]">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm font-medium">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">
            ${product.price}
          </h3>
        </div>

        {/* Button */}
        <button className="mt-2 w-full bg-black text-white py-2.5 rounded-xl font-medium hover:bg-gray-800 transition">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;