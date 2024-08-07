import React, { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
// import { logout } from "../services/userData";
import { UserContext } from "../authUser";
import Modal from "./Modal";
import LogoutModal from "./LogoutModal";

export default function UserExternalPageModal() {

  return (
    <div className="fixed top-20 z-10 flex shadow-lg flex-col gap-y-4 items-center right-10 bg-white rounded-md p-4">
      {/* <button onClick={handleLogout} className=" capitalize font-semibold text-black">
        {isPending ? "logingout" : "logout"}
      </button> */}
      <LogoutBtn/>
      <Link to="/" className="text-black font-semibold  capitalize">
        go to website
      </Link>
    </div>
  );
}


function LogoutBtn() {
  return (
    <Modal>
      <Modal.Open opens="logout">
     <button className="text-black font-semibold capitalize">logout</button>
      </Modal.Open>
      <Modal.Window name="logout">
        <LogoutModal />
      </Modal.Window>
    </Modal>
  );
}
