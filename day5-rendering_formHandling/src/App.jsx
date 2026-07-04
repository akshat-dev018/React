import React, {useState} from 'react';

const App = () => {
  console.log("app rendring..")

  const [count, setCount] = useState(0);
  const [user, setUser] = useState(
    {
      name:"Raman",
    }
    );



  let handleClick = ()=>{
    setUser({name:"baman"})
// kyuki tum ek obj bhej rhe ho toh hr bar naya refrence jayega toh bar-bar re-rendring hoga 
  }

  let countIncrement = ()=>{
    setCount(count+1);
  }

  return (
    <div>
      <h1>Count is -{count}</h1>
      <h1>User is - {user.name}</h1>

      <button onClick={countIncrement}>Count inc</button>
      <button onClick={handleClick}>Change Name </button>
    </div>
  )
}

export default App
