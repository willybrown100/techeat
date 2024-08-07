import React from 'react'

export default function useUser() {
     const userInfo = localStorage.getItem("userDetails");
    
     const authUserData = JSON.parse(userInfo);
     const userId = authUserData?.user?._id
    //  console.log(authUserData?.token);
  return { authUserData, userId };
}

function authUser(){
  
}