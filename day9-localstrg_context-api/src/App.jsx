import React , {useState} from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'
import Form from './components/Form'


const App = () => {


  const [toggle, setToggle] = useState(false);

  const [users, setUsers] = useState(()=>{
  return JSON.parse( localStorage.getItem("users")) || []
  });

  const [updatedData, setUpdatedData] = useState(null)


  const deleteUser = (id)=>{
    let filterUser = users.filter((val)=>{
      return val.id!==id
    });
    console.log(filterUser);
    setUsers(filterUser)
    localStorage.setItem("users",JSON.stringify(filterUser));
  }

  return (
    <div className='p-3  flex flex-col gap-4'>
      <Navbar setToggle={setToggle} />

{
toggle?
(<div className='flex gap-4'>{users.map((elem)=>{return <Usercard
                  setUpdatedData={setUpdatedData} 
                  deleteUser={deleteUser}
                  key={elem.id}
                  user={elem}
                  setToggle={setToggle}/>})}</div>):
(<div className="flex items-center justify-center h-[70%]"><Form 
                  updatedData={updatedData}
                  users={users} 
                  setUsers={setUsers} 
                  setToggle={setToggle} /></div>)
}


    </div>
  )
}

export default App

