import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
    },
    reducers:{
        addToCart:(state,actions)=>{
            state.cartItems.push(actions.payload);
        },
        removeFromCart:()=>{},
    },
})

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;