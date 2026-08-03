import { createContext, useState } from "react";
// setup our blank store
export const MyStore = createContext();


// context higher order functional component hota hai 
// higher order functional component ka mtlb hota hai jo apne ander children ko accept krein 


// make a provider of our store who handle data and serve it to customers
export const ContextProvider = ({children})=>{
    const [centralValue, setCentralValue] = useState("mai context se hun")
    const [cartItems, setCartItems] = useState([])

    return <MyStore.Provider value={{cartItems,setCartItems,centralValue}}>{children}</MyStore.Provider>;
};

// yaha children "TestComponent hai"
// you can only and only pass "value" prop