import React, { useContext } from 'react'
import CartCard from "../components/CartCard"
import { MyStore } from '../Context/MyContext'

const Cart = () => {

  let {cartItems} = useContext(MyStore);


  return (
    <div className='h-[95%] text-black grid grid-cols-3 gap-4'>
    {
      cartItems.map((elem)=>{
        return <CartCard key={elem.id} item={elem}/>
      })
    }
    </div>
  )
}

export default Cart
