import React from 'react'
import { useProductApi } from '../hooks/productHooks'

const Filters = ({filterProducts}) => {

  //  let {filterProducts} = useProductApi();

  return (
    <div className='p-3 rounded flex gap-6 w-full border border-gray-500'>
      <div className='flex gap-8 w-full '>
        <input onChange={(e)=>filterProducts(e.target.value)}
         className='p-2 outline-0 border w-full rounded' type="text" placeholder='Search Products..' />
        <button className='p-2 bg-white text-black rounded border-0 cursor-pointer'>Search</button>
      </div>

    <div>
        <span>Select Categories</span>
        <select className='cursor-pointer p-2 bg-white text-black outline-0  rounded' >
            <option className='text-black' value="groceries">Groceries</option>
            <option className='text-black' value="beauty">Beauty</option>
            <option className='text-black' value="fragnances">Fragnances</option>
            <option className='text-black' value="furniture">Furniture</option>
        </select>
    </div>

    </div>
  )
}

export default Filters
