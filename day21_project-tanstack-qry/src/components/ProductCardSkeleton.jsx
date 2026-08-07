import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 animate-pulse">

      {/* Image */}
      <div className="bg-zinc-800 h-64 flex items-center justify-center">
        <div className="w-40 h-40 bg-zinc-700 rounded-xl"></div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Title */}
        <div className="h-5 w-3/4 bg-zinc-700 rounded"></div>

        {/* Price */}
        <div className="h-7 w-24 bg-zinc-700 rounded"></div>

        {/* Quantity */}
        <div className="flex justify-between items-center">
          <div className="h-4 w-20 bg-zinc-700 rounded"></div>

          <div className="flex gap-2">
            <div className="w-8 h-8 bg-zinc-700 rounded"></div>
            <div className="w-10 h-8 bg-zinc-700 rounded"></div>
            <div className="w-8 h-8 bg-zinc-700 rounded"></div>
          </div>
        </div>

        {/* Button */}
        <div className="h-12 w-full bg-zinc-700 rounded-xl"></div>

      </div>
    </div>
  );
};

export default ProductSkeleton;