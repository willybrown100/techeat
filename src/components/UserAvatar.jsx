import React, { useContext, useEffect, useState } from 'react'
import { HiChevronDown, HiOutlineChevronDown } from 'react-icons/hi2';
import useUser from '../hooks/useUser';
import { useLocation } from 'react-router-dom';
import Modal from '../ui/Modal';
import UserExternalPageModal from '../ui/UserExternalPageModal';
import { UserContext,  } from '../authUser';
// import MiniSpinner from '../ui/miniSpinner';
import MiniLoader from '../ui/MiniLoader';

export default function UserAvatar() {
const { userData ,loading,setUserData,setLoading} = useContext(UserContext);

  
   const { authUserData, userId } = useUser();
console.log(authUserData)
   useEffect(() => {
     async function getUser() {
       try {
         setLoading(true);
         const response = await fetch(
           `https://techeat-server.onrender.com/api/auth`,
           {
             headers: {
               Authorization: `Bearer ${authUserData?.token}`,
             },
           }
         );
         const data = await response.json();
         setUserData(data.user);
console.log(data)
         return data;
       } catch (error) {
         console.log(error);
       } finally {
         setLoading(false);
       }
     }
     getUser();
   }, [authUserData?.token]);
// if(loading) return <MiniLoader/>
  return (
    <>
    { loading? <MiniLoader/>:
        <div className="md:flex gap-x-2 hidden  items-center">
          <img
            src={userData?.profilePhoto}
            className="w-7 rounded-full h-7"
            alt="img"
          />
          <h5 className="font-semibold mb-0 tracking-wide text-white font-headings capitalize">
            {userData?.name}
          </h5>
          {/* <HiChevronDown className="text-black " /> */}
          <NavigateBtn />
        </div>}
 
    
    </>
  );
}

function NavigateBtn(){
  return (
    <Modal>
      <Modal.Open opens="externalPageUserModal">
        <HiChevronDown className="text-stone-100 " />
      </Modal.Open>
      <Modal.Window name="externalPageUserModal">
        <UserExternalPageModal />
      </Modal.Window>
    </Modal>
  );
}
