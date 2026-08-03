import React, { useContext } from 'react'
import { MyShop } from '../Context/MyWebsite'

const Navbar = () => {

  let {setIsCartOpen} = useContext(MyShop)

  return (
    <div className='flex bg-black rounded p-5 items-center justify-between text-white'>
      <div>logo</div>
      <div className='flex gap-10 text-xl'>
        <p onClick={()=>setIsCartOpen(false)} className='cursor-pointer'>Home</p>
        <p onClick={()=>setIsCartOpen(true)} className='cursor-pointer'>Cart</p>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
