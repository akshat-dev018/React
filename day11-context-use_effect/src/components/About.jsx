import React from 'react'
import { useEffect } from 'react'

const About = () => {


 let interval = setInterval(() => {
      console.log("hey i am in about")
    }, 1000);
// Memory leak ho rhi jb about page chla jaa rha ye fir bhi chl rha 
// iss case mein hum useEffect ka 3rd chez use krenge jo "unmounting fun" hota hai

useEffect(() => {

   console.log("About rendering")

  return () => {

    clearInterval(interval);

    console.log("i am triggered kyuki about page ko chordh ke jaa rha hai")
  }
}, [])








  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}

export default About
