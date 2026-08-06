import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    // this is state for holding data
    initialState:{
        count : 0,
    },
    // here is the actions for updating the state
// yaha pe jo ye reducers hai ye actions hai tbhi counterSlice.actions ye likha hai
    reducers:{
        increment:(state,action)=>{
    // ye state "this" ka kaam kr rhi jo humne js mein padha tha
            console.log("this is actions",action);
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        },
    },
});

console.log("slice->",counterSlice);

export const {increment,decrement} = counterSlice.actions;

export default counterSlice.reducer;