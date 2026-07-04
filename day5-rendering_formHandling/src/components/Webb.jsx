import React from 'react'
import Card from './Card'
import Contact from './Contact'
import About from './About'

const Webb = () => {

  let arr = [2,3,4,5,6,7,8,9,2,6,8,];

  return (
    <div>
      {arr.map((elem,index)=>{
        return <Card key={index} />
      })}
       
    </div>
  )
}

export default Webb
