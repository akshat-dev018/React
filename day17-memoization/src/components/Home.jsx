import React from 'react'

const Home =  ({greet}) => {
    console.log('home rendering..')
    greet();
  return (
    <div>
      home
    </div>
  )
}

export default React.memo(Home);
