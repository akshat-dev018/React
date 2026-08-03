import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-80 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border">

      {/* Product Image */}
      <div className="bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 space-y-3">

        {/* Category */}
        <span className="inline-block bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={18} fill="currentColor" />
            <span className="font-medium text-gray-700">
              {product.rating.rate}
            </span>
            <span className="text-sm text-gray-400">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-green-600 font-bold text-2xl">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;