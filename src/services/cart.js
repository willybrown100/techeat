// import { isAction } from "@reduxjs/toolkit";
import { CartContext } from "../CartContext";
import { useContext } from "react";

 const userInfo = localStorage.getItem("userDetails");
 const authUserData = JSON.parse(userInfo);
 const userId = authUserData?.user?._id;
 // const {userId}=useUser()
 console.log(userId);
 export async function getUserCart() {
  try {
    const response = await fetch(
      `https://techeat-server.onrender.com/api/products/carts/${userId}`
    );
    const data = await response.json();
 
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

 export async function updateCartItem({itemId}) {
   console.log(itemId);
   try {
     const response = await fetch(
       `https://techeat-server.onrender.com/api/products/update-carts/${itemId}`,
       {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ action: "increment" }),
       }
     );
     const data = await response.json();

     console.log(data);
     return data;
   } catch (error) {
     console.log(error);
   }
 }

 export async function decreaseCartItem({itemId}) {
   console.log(itemId);
   try {
     const response = await fetch(
       `https://techeat-server.onrender.com/api/products/update-carts/${itemId}`,
       {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ action: "decrement" }),
       }
     );
     const data = await response.json();

     console.log(data);
     return data;
   } catch (error) {
     console.log(error);
   }
 }

