import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard';
import { axiosInstance } from '../config/axiosInStance';

const UsersPage = () => {

  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  let getUsersData= async ()=>{
    try {
      let resp = await axiosInstance.get('/users');
      console.log(resp);
      setUsersData(resp.data);
      setIsLoading(false); 
      // isLoading false hai ab users dikhenge 
    } catch (error) {
      console.log("api error",error)
    }
  }

  useEffect(() => {
  getUsersData()
  }, [])
  
  if(isLoading) return <h1 className='text-4xl'>Loading Users</h1>
  // true hai tb ye chlega 

  return (
    <div className='grid grid-cols-4 gap-5'>
      {
        usersData.map((val)=>
        (<UserCard key={val.id} user={val} />))
      }
    </div>
  )
}

export default UsersPage
