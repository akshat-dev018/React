import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 flex items-center justify-between bg-black text-white rounded'>
      <div>
        <img width={40} className='rounded-full'
        src="https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png" alt="" />
      </div>
      <div className='flex gap-6 font-semibold'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button onClick={()=>setToggle(prev=>!prev)} className='p-2 bg-pink-700 cursor-pointer rounded'>Create User</button>
    </div>
  )
}

export default Navbar
