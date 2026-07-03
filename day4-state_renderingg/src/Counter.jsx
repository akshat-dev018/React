import React, { useState } from 'react'

const Counter = () => {
    console.log("counter is rendering...")
   let [count,setCount] = useState(0,)
  return (
    <div>
      <h1>Count is {count}</h1>

      <button onClick={()=>{
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
// jb aap same set function ko ek function ke ander multiple bar call krte ho toh react mein ek term on ho jata hai "BATCHING"
// BATCHING in sbko ek bar hi execute krega 


        setCount((prev)=> prev + 1);
        setCount((prev)=> prev + 1);
        setCount((prev)=> prev + 1);
// set function ke ander ek aur chez hoti hai "previous" jisko hum bolte hai "prev" .. previous ka mtlb hai current state 
// toh re-rendring toh ek bar hi hogi lekin count ki value ab yaha pe 3 se badegi   
      }}
      >Increment</button>
    </div>
  )
}

export default Counter
