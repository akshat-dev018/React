import React from 'react'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'

// REACT KE ANDER HR CHEZ KO MANUPLATE KRNA , SAVE RKHNA , VARIABLES STATE HOTA HAI
// useState() ek hook hai jo aapki values ko re-render krta hai

const App = () => {
// useState EK ARRAY RETURN KRTA HAI "0" YE 0TH INDEX PE AYEGA 
// useState DO CHEZ LEGA ..PEHLA JISPE CHALANA DUSRA
//  setFunction JIS STATE KE LIYE BNA HAI USKO UPDATE KREGA AUR APNE PARENT KO RE-RENDER KREGA


let [count , setCount] = useState(0);

let [flag , setFlag] = useState(true);
console.log(flag)

// setCount mein aesa kaun sa function chl rha hai jo app ko re-render kr rha hai
// closures + hof chl rha hai .. func hai jo pehle state ko update krte hai uske baad re-render krte hai aapke main func ko jo bna ke rkha hai

// HOOKS CAN ONLY BE CALLED INSIDE A FUNCTIONAL COMPONENT
  return (
    <div>
      {/* <Navbar/>
      <Hero/>
      <Contact/>
      <Footer /> */}

        <h1>Count -{count}</h1>

        <button onClick = {()=>{
          setCount(count+1)
        }}>Increment</button>

        <button onClick={()=>{
          setFlag(false)
        }}>Change Boolean</button>

    </div>
  )
}

export default App

