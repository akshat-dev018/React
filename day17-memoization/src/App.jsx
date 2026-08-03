import React, { useCallback, useMemo, useState } from 'react'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  console.log("app rendering..");

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({name:"akshat", id:234});

  let calculation = useMemo( ()=>{
    console.log("calculation running");
   let sum = 0;
    for(let i = 0; i<100; i++){
      sum+=i;
    }
    return sum;
  },[]);
// yaha dikkat hai ki hume ek bar function ko chlana hai bar bar calculation nhi krni
// ab yaha pe hum useMemo() ka use krenge 
// useEffect bhi kaam nhi ayega kyuki hum return kr rhe hai kuch toh tb hum useMemo use krenge 

  let greet= useCallback(()=>{
    console.log("hey.. good evening..")
  },[]); 
  //abhi problem ye hai ki func ka refrence change ho rha hr br toh home br br render ho rha
  // hume kuch aesa krna hoga ki ye func ka refrence save ho jaye aur change na ho
  // humare pass hook hai => useCallback() 

  return (
    <div>
      <h1>hello</h1>
      <h2>count is {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h2>Name is {users.name}</h2>
      <h2>My calculation is {calculation}</h2>
      <button onClick={()=>setUsers({...users,name:"shivang"})}>Change Name</button>
      <Home greet={greet} />
      <About users={users}  />
    </div>
  )
}

export default App

// memoize ka mtlb yaad rkhna aur uss chez ko re-rendering pe bdlne na dena 
// when you need to memoize any functional component(jinka first letter bada hota hai )
// use => React.memo() hook which accepts the refrence of the functional component

// 2 ways of memoizing 1. function ko wrap krdo react.memo() ke ander
// 2. export krte time react.memo() se wrap krdo

// functional components ka agr refrence hold krna hai toh memo hota hai
// functions ka agr refrence hold krna hai toh Callback hota hai  

// useMemo => kisi bhi expensive operation ke result ko hold rkhna 