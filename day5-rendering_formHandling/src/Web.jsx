import React from 'react'
import { useState } from 'react'

const Web = () => {
    // Brute Force => Jitne Inputs honge utne state bnado
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
   
    // BETTER => useState mein obj ka use kro => 1 state mein ho jayega
    // const [formData, setFormData] = useState({})

    // console.log("formdata=>",formData);


    // OPTIMIZED => input mein ek aur attribute denge "name" jo unique krne ke kaam aata hai 
    const [formData, setFormData] = useState({})
    console.log("formdata=>",formData);


    const handleChange = (event)=>{
        setFormData({...formData , [event.target.name]:event.target.value})
    }

  return (
    //   <div className='flex flex-col gap-4 w-60'>
    //   <input onChange={(events)=>setName(events.target.value)} className='border-2 p-2' type="text" placeholder='Name' />
    //   <input onChange={(events)=>setEmail(events.target.value)} className='border-2 p-2' type="text" placeholder='Email' />
    //   <input onChange={(events)=>setPassword(events.target.value)} className='border-2 p-2' type="text" placeholder='Password' />

    // <h1>Name is {name}</h1>
    // <h1>Email is {email}</h1>
    // <h1>Password is {password}</h1>
    // </div>


    //     <div className='flex flex-col gap-4 w-60'>
    //   <input onChange={(event)=>setFormData({...formData , name:event.target.value})}  className='border-2 p-2' type="text" placeholder='Name' />
    //   <input onChange={(event)=>setFormData({...formData,email:event.target.value})} className='border-2 p-2' type="text" placeholder='Email' />
    //   <input onChange={(event)=>setFormData({...formData,password:event.target.value})} className='border-2 p-2' type="text" placeholder='Password' />

    // </div>

          <div className='flex flex-col gap-4 w-60'>
      <input name='name' onChange={handleChange}  className='border-2 p-2' type="text" placeholder='Name' />
      <input name='email' onChange={handleChange} className='border-2 p-2' type="text" placeholder='Email' />
      <input name='password' onChange={handleChange} className='border-2 p-2' type="text" placeholder='Password' />

         <h1>Name is {formData.name}</h1>
         <h1>Email is {formData.email}</h1>
         <h1>Password is {formData.password}</h1>

    </div>

  )
}

export default Web


// tum inputs mein inki values kaise le rhe ho ? => react mein inputs mein bhi hota hai events
// jinka naam hai onChange{} 
// ab useState hook se humne isko react se bind kr diya (single way binding) useState re-render krta hai aur update kr rha input ko