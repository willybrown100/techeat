import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../authUser';
import { useMutation } from '@tanstack/react-query';
import Modal from './Modal';
import LogoutModal from './LogoutModal';


export default function UserNavModal() {
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
    <div className="fixed top-20 z-10 flex shadow-lg flex-col gap-y-2 items-center right-10 bg-white rounded-md p-4">
      {/* <button onClick={handleLogout} className=" capitalize font-semibold text-black">
        {isPending ? "loginout.." : "logout"}
      </button> */}
<LogoutBtn/>
      <Link to="/appLayout" className="text-black font-semibold  capitalize">
        go to dashboard
      </Link>
    </div>
  );
}
function LogoutBtn() {
  return (
    <Modal>
      <Modal.Open opens="externalogout">
        <button className="text-black font-semibold capitalize">logout</button>
      </Modal.Open>
      <Modal.Window name="externalogout">
        <LogoutModal />
      </Modal.Window>
    </Modal>
  );
}


