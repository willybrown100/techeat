import React, { useContext, useState } from 'react'
import Button from './Button'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../authUser';
import { useMutation } from '@tanstack/react-query';


export default function LogoutModal() {
      const navigate = useNavigate();
      const { logout } = useContext(UserContext);
      const [closeLogout,setCloseLogout]=useState(true)
      const { mutate, isPending } = useMutation({
        mutationFn: logout,
        onSuccess: () => {
          navigate("/");
        },
      });
      const handleLogout = function () {
        mutate();
      };
      const handleClose = function () {
       setCloseLogout(false)
      };
  return (
      <>
    {closeLogout &&
         <motion.div
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: 1, opacity: 1 }}
      className="min-w-[30vw] flex flex-col bg-white  items-center justify-between z-30  dark:bg-light/75 backdrop-blur-md rounded-lg py-[2rem] fixed top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
    >
      <div className="flex flex-col gap-4">
        
        <div className='flex flex-col items-center gap-2 z-30'>
          <h4 className="text-black font-headings mb-0 font-semibold">
            are you sure you want
          </h4>
          <h4 className="text-black font-headings mb-0 font-semibold">
            {" "}
            to log out?
          </h4>
        </div>
        <div className="flex items-center gap-x-8">
          <button onClick={handleLogout} disabled={isPending} className="px-8 capitalize text-white bg-brand rounded-md py-1">
            {isPending?"wait..":"yes"}
          </button>
          <button disabled={isPending} onClick={handleClose} className="border px-8 capitalize py-1  border-brand rounded-md text-brand ">
            no
          </button>
        </div>
      </div>
    </motion.div>
}
    </>
  );
}
