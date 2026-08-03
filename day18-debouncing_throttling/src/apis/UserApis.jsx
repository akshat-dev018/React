import React from "react";
import axios from "axios";

  

export let getUsers = async()=>{
    console.log("api call wla func chl rha")
    try {
      let response = await axios.get("https://fakestoreapi.com/users");
      console.log(response.data)
    } catch (error) {
      console.log("User api error",error);
    }
  }

