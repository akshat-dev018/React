import React from "react";

const CartCard = ({ item }) => {
  return (
    <div className="flex items-center gap-5 bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition">

      {/* Product Image */}
      <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">

        <h2 className="font-semibold text-lg line-clamp-1">
          {item.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          {item.description}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">⭐</span>
          <span>{item.rating.rate}</span>

          <span className="text-gray-400">
            ({item.rating.count})
          </span>
        </div>

        <h3 className="text-xl font-bold text-green-600 mt-2">
          ${item.price}
        </h3>
      </div>

      {/* Quantity */}
      <div className="flex flex-col items-center gap-4">

        <div className="flex items-center border rounded-lg overflow-hidden">

          <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200">
            -
          </button>

          <span className="px-4">{item.quantity}</span>

          <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200">
            +
          </button>

        </div>

        <button className="text-red-500 font-medium hover:text-red-700">
          Remove
        </button>

      </div>

    </div>
  );
};

export default CartCard;