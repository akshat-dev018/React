import React, { useRef, useState } from 'react'

const Forms = () => {
    console.log("form re-rendring...")

    const [product, setProduct] = useState({});
    console.log("this is products=>",product)
   
    const formRef = useRef({})

    const handleSubmit=(event)=>{
      event.preventDefault();

      let obj = {
      productName: formRef.current.productName.value,
      price: formRef.current.price.value,
      category: formRef.current.category.value,
      image: formRef.current.image.value,
    };
    setProduct(obj);
    }


  return (
    <div className='w-80 h-screen'>
     <form onSubmit={handleSubmit} className='flex p-6 rounded bg-white  flex-col gap-4'>
        <input 
             ref={(elem)=> (formRef.current.productName = elem)}
          className='p-2 border border-gray-500 rounded' type="text" placeholder='Product Name' />

        <input
             ref={(elem)=> (formRef.current.price = elem)}
          className='p-2 border border-gray-500 rounded' type="text" placeholder='Price' />
      
        <span>Select a Category:</span>

        <select
             ref={(elem)=> (formRef.current.category = elem)}
         className='p-2 border border-gray-500 rounded' >
            <option value="MENS">Mens</option>
            <option value="WOMEN">Women</option>
            <option value="KIDS">Kids</option>
        </select>

        <input 
             ref={(elem)=> (formRef.current.image = elem)}
        className='p-2 border border-gray-500 rounded'type="text" placeholder='Image' />
        <button className='p-2 bg-blue-600 text-white rounded'>CREATE</button>
     </form>

    <h1>{product.productName}</h1>
    <h1>{product.price}</h1>
    <h1>{product.category}</h1>
    <h1>{product.image}</h1>


    </div>
  )
}

export default Forms


// useRef ek hook hota hai jo tumhare real dom ke element ko fetch krta hai