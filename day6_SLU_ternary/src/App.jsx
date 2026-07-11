import React, {useState} from 'react'
import Login from './components/Login'
import Register from './components/Register'
import UserCard from './components/UserCard'

const App = () => {

  const [toogle, setToggle] = useState(false)
   const [users , setUsers] = useState([]);
    console.log(users)

  return (
    <div className='bg-gray-300 h-screen flex justify-center items-center'>
     {toogle ?(users.map((elem)=> <UserCard user={elem}/>)) : <Register setUsers={setUsers} setToggle={setToggle} />}
    </div>
  )
}

export default App

// PROPS PARENT SE CHILD PE JATA HAI .. ISLIYE HUMNE YAHA PE REGISTER AUR LOGIN USE KRA 
// Aesi state jisko data multiple jagah transfer krna hai usko aap parent pe bna dete ho 