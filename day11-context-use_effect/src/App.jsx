import React, { useContext, useEffect, useState } from 'react'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import { MyStore } from './context/MyContext'
import axios from "axios"

const App = () => {

  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(true)

  const [apiData, setApiData] = useState(null)

  let getData = async ()=>{
    let response = await axios.get("https://fakestoreapi.com/products")
    console.log(response);
    setApiData(response.data);
  }

  useEffect(() => {
    getData();
  }, [])
  

  
  // useEffect(()=>{
  //   console.log("app rendring")
  // } , [])
//useEffect do cheze leta hai.. ek leta hai function aur ek leta hai blank array
// useEffect ka saara magic dependency array mein chupa hai 
// blank array ka mtlb hota hai ..ki jo call back function ke ander likha hai 
// usko aap ek bar execute karoge wo sirf on run time mein


  return (
    <div>
      <h1>hi-{count}</h1>
      <button onClick={()=>setCount(count+1)} className='flex'>Increment</button>
      <button onClick={()=>setToggle((prev)=>!prev)}>Change Toggle state</button>
      
      {
        toggle? <Contact/> : <About/>
      }
      
    </div>
  )
}

export default App

// agr parent re-render hota hai toh uske ander ke sarein component
//  bhi re=render hote hai 