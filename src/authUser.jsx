import React, { createContext, useEffect, useState } from 'react'
import useUser from './hooks/useUser';

export const UserContext=createContext()
export default function AuthUserProvider({children}) {
  
   const { authUserData, userId } = useUser();
   const [userData, setUserData] = useState(null);
 const [loading, setLoading] = useState(false);

 async function logout() {
     try {
           setLoading(true);
       const response = await fetch(
         "https://techeat-server.onrender.com/api/auth/logout",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${userId}`,
           },
         }
       );
       console.log(response.ok);
       if (response.ok) {
         localStorage.removeItem("userDetails");
       } else {
         alert("couldnt logout");
       }


     } catch (error) {
       console.log(error);
     } finally {
       setLoading(false);
     }
   }
  return (
    <UserContext.Provider value={{ userData, setUserData , setLoading,loading,logout}}>
      {children}
    </UserContext.Provider>
  );
}

