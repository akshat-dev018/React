import type { Product } from "../types";

const ProductCard = ({ product}:{product:Product}) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Product Image */}
      <div className="h-64 w-full bg-gray-100 flex items-center justify-center p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-1 text-sm font-medium capitalize text-gray-500">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="truncate text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Price & Rating */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">
            ${product.price}
          </p>

        </div>

        {/* Add To Cart */}
        <button
          className="mt-5 w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800 active:scale-95"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;