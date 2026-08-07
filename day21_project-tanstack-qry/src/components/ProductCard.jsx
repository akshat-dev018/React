import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-800 hover:border-violet-500 hover:shadow-violet-500/20 transition-all duration-400 group">

      {/* Image */}
      <div className="bg-zinc-800 p-6 flex justify-center items-center h-64">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Title */}
        <h2 className="text-white font-semibold text-lg line-clamp-1">
          {product.title}
        </h2>

        {/* Price */}
        <p className="text-2xl font-bold text-violet-400">
          ${product.price}
        </p>

        {/* Quantity */}
        <div className="flex items-center justify-between">

          <span className="text-gray-400 text-sm">
            Quantity
          </span>

          <div className="flex items-center bg-zinc-800 rounded-lg">

            <button
              onClick={() =>
                quantity > 1 && setQuantity(quantity - 1)
              }
              className="px-3 py-1 text-white hover:bg-zinc-700 rounded-l-lg"
            >
              -
            </button>

            <span className="px-4 text-white">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 text-white hover:bg-zinc-700 rounded-r-lg"
            >
              +
            </button>

          </div>
        </div>

        {/* Button */}
        <button
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;