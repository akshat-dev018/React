import React, { useContext } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { MyShop } from '../Context/MyWebsite';

const ProductCard = ({ product}) => {

  let {setCartItems} = useContext(MyShop);

  return (
    <div className='group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100'>

      {/* Wishlist */}
      <button className='absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur hover:bg-red-50 transition'>
        <Heart className='w-5 h-5 text-gray-600 hover:text-red-500' />
      </button>

      {/* Product Image */}
      <div className='h-64 bg-gray-50 flex items-center justify-center p-6 overflow-hidden'>
        <img
          src={product.image}
          alt={product.title}
          className='h-full object-contain group-hover:scale-110 transition-transform duration-500'
        />
      </div>

      {/* Content */}
      <div className='p-5 space-y-3'>

        {/* Category */}
        <span className='inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full capitalize'>
          {product.category}
        </span>

        {/* Title */}
        <h3 className='font-semibold text-gray-800 line-clamp-2 min-h-[48px]'>
          {product.title}
        </h3>

        {/* Rating */}
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1'>
            <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
            <span className='text-sm font-medium text-gray-700'>
              {product.rating.rate}
            </span>
          </div>
          <span className='text-sm text-gray-500'>
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className='text-sm text-gray-500 line-clamp-2'>
          {product.description}
        </p>

        {/* Price + Button */}
        <div className='flex items-center justify-between pt-2'>
          <div>
            <p className='text-2xl font-bold text-gray-900'>
              ${product.price}
            </p>
          </div>

          <button onClick={()=>setCartItems((prev)=>[...prev,product])}
           className='flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition'>
            <ShoppingCart className='w-4 h-4' />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
