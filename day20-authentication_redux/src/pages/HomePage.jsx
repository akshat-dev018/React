import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByValue } from '../features/CounterSlice';

const HomePage = () => {

  const [inpValue, setInpValue] = useState(0)

  let {count} = useSelector((store)=>store.counter);

  let dispatch = useDispatch();

  return (
    <div>
      <h1>count is {count} </h1>
      <button onClick={()=>dispatch(increment())} >Increment</button>
      <button  onClick={()=>dispatch(decrement())} >Decrement</button><br></br>
      <input type="text" placeholder='Enter Count' onChange={(e)=>setInpValue(e.target.value)} />
      <button onClick={()=>dispatch(incrementByValue(inpValue))}>Add to Count</button>
    </div>
  )
}

export default HomePage

// action ko call isliye kr rhe kyuki action bhi ek function hai 