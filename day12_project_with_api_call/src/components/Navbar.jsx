import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext';



    const Navbar = ()=>{

      let {setIsCartOpen} = useContext(MyStore)

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
};

export default Navbar