import React, { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
// import { logout } from "../services/userData";
import { UserContext } from "../authUser";

export default function UserExternalPageModal() {
  const navigate =useNavigate()
  const {logout}=useContext(UserContext)
  const { mutate,isPending} = useMutation({
    mutationFn: logout,
    onSuccess:()=>{
      navigate("/")
    }
  });
  const handleLogout = function () {
    mutate();
  };
  return (
    <div className="fixed top-20 z-10 flex shadow-lg flex-col gap-y-4 items-center right-10 bg-white rounded-md p-4">
      <button onClick={handleLogout} className=" capitalize font-semibold text-black">
        {isPending ? "logingout" : "logout"}
      </button>
      <Link to="/" className="text-black font-semibold  capitalize">
        go to website
      </Link>
    </div>
  );
}
