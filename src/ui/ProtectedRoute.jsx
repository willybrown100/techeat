import React, { useContext, useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner';
import { UserContext } from '../authUser';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
const {  setUserData } = useContext(UserContext);
const [authenticated,setAuthenticated]=useState("")
console.log(authenticated)
const navigate = useNavigate()
const [load,setLoad]=useState(false)
const { authUserData, userId } = useUser();
const session = authUserData?.token
console.log(session)
// if(!session) return null
useEffect(() => {
  // load auth user in from database==
  async function getUser() {
    try {

      setLoad(true);
      const response = await fetch(
        `https://techeat-server.onrender.com/api/auth`,
        {
          headers: {
            Authorization: `Bearer ${authUserData?.token}`,
          },
        }
      );
      const data = await response.json();

console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }
  getUser();
}, [authUserData?.token]);

// if no user redirect to login==
useEffect(()=>{
  if (
  !session
  )
    navigate("/signin");
  })

// if user loading show spinner--

if(load){return <LoadingSpinner/>}
  if (session) {
    return children;
  }
  
}
