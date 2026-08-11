import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAtion = createAsyncThunk('auth/login',async (credentials,thunkApi)=>{
        console.log(credentials);
         try {
                console.log("thunk action triggered")
                let response = await api.post('/auth/login',credentials);
                toast.success("user logged in")
                localStorage.setItem('accessToken',response.data.accessToken);
                return response.data;
                // ye redux mein return ho rha hai ..tumhari state mein
            } catch (error) {
                toast.error("user logged in fail")
              return  thunkApi.rejectWithValue("Login failed");
            }
});

// thunkApi ek keyword hai jo tumhare thunk ke errors ko fetch krta hai 


export const hydrateUserAction = createAsyncThunk("/auth/hydrate",async (_,thunkApi)=>{
      let token = localStorage.getItem('accessToken')

    try {
        let response = await api.get('/auth/me',{
            headers: {
                'Authorization': `Bearer ${token}`, 
  },
        });
        return response.data;
    } catch (error) {
        toast.error("Unauthorized user");
       return thunkApi.rejectWithValue("Unauthorized user");
    }
})