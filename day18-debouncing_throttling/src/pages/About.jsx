import React from 'react'

const About = () => {

  console.log("about chl rha")

  // const [Users, setUsers] = useState([])

  // let getUsers = async()=>{
  //   try {
  //     let response = await axios.get("https://fakestoreapi.com/users");
  //       setUsers(response.data);
  //       console.log(response.data)
  //   } catch (error) {
  //     console.log("User api error",error);
  //   }
  // }

  // useEffect(() => {
  //   getUsers();
  // }, [])
  

  return (
    <div>
      <h1>Hey i am about</h1>
      {/* {
        Users.map((val)=>{ return <h1 key={val.id}>{val.username}</h1>})
      } */}
    </div>
  )
}

export default About
