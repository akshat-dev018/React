import React from 'react'

const About = ({users}) => {

    console.log("about rendering..")

  return (
    <div>
      about
    </div>
  )
}

export default React.memo(About,(prevProps,nextProps)=>{
      return prevProps.users.id === nextProps.users.id;
})

// toh abhi humne memo ki condition tod di thi .. memo static mein lgta hai
// humne props pass krke dynamic kr diya tha ab hum kya krenge
// agr prevprops ki id nextprops ki id se match krti hai toh hum re-render nhi krenge 

// particular chez ko target krke bhi re-rendering control kr skte ho