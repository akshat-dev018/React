import React from 'react'

const ProductsCard = ({product,del}) => {
  return (
    <div className='p-2 border-2 flex flex-col gap-4 rounded-2xl'>
      <div className='w-40 h-40'>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h2 className='font-semibold'>{product.title.substring(0,20)}</h2>
        <p>{product.category}</p>
        <p className='text-green-600'>{product.price}</p>
      </div>
      <button onClick={()=>del(product.id)} className='p-2 bg-red-500'>Delete</button>
    </div>
  )
}

export default ProductsCard
