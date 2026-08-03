import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({children})=>{

    const [registeredUsers, setRegisteredUsers] = useState(
        JSON.parse(localStorage.getItem("registeredUsers")) || []
    );
    const [loggedInUser, setLoggedInUser] = useState(
        JSON.parse(localStorage.getItem("loggedinUser"))|| null
    )
    
    console.log("Registered users =>",registeredUsers);
    console.log("logged in users =>",loggedInUser);

    return <Auth.Provider value={{
        registeredUsers,setRegisteredUsers,
        loggedInUser,setLoggedInUser
    }}
    >{children}</Auth.Provider>
}
