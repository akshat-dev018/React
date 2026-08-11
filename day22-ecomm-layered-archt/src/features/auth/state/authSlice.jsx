import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAtion } from "./authActions";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading :false,
    },
    // ye sirf tumahre ui se communicate krne ke liye hote hai
    reducers:{
        addUser:(state,action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
        },
         removeUser:(state)=>{
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;

        }
    },

    // ab agr tumhe redux ke thunx se communicate krna hoga 
    extraReducers:(builder)=>{
        // builder mtlb thunx action jo tumhare sbhi cases ko handle krega
        builder.addCase(loginUserAtion.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(loginUserAtion.fulfilled,(state,action)=>{
            state.user = action.payload;
            state.isAuthenticated =true;
            state.isLoading=false;
        })
        .addCase(loginUserAtion.rejected,(state,action)=>{
            state.isLoading = false
        })
        .addCase(hydrateUserAction.pending,(state,action)=>{
            state.isLoading = true
        })
        .addCase(hydrateUserAction.fulfilled,(state,action)=>{
            state.user = action.payload;
            state.isAuthenticated =true;
            state.isLoading=false;
        })
        .addCase(hydrateUserAction.rejected,(state,action)=>{
            state.isLoading = false
        })
    }
});

export const {addUser,removeUser} = authSlice.actions;

export default authSlice.reducer;


// ek api mein 3 state hoti hai pending rejected fulfilled