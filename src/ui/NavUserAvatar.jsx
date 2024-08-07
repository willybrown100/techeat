import React, { useContext, useEffect } from 'react'
import { UserContext } from '../authUser';
import useUser from '../hooks/useUser';
import MiniLoader from './MiniLoader';
import Modal from './Modal';
import { HiChevronDown } from 'react-icons/hi2';
import UserNavModal from './UserNavModal';

export default function NavUserAvatar() {

    const { userData, loading, setUserData, setLoading } =
      useContext(UserContext);
    console.log(loading);

    const { authUserData, userId } = useUser();

    useEffect(() => {
      async function getUser() {
        try {
          setLoading(true);
          const response = await fetch(
            `https://techeat-server-1.onrender.com/api/auth`,
            {
              headers: {
                Authorization: `Bearer ${authUserData?.token}`,
              },
            }
          );
          const data = await response.json();
          setUserData(data.user);

          return data;
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      getUser();
    }, [authUserData?.token]);
    if(loading) return <MiniLoader/>
  return (
    <div className="md:flex gap-x-2 hidden  items-center">
      <img
        src={userData.profilePhoto}
        className="w-7 rounded-full h-7"
        alt="img"
      />
      <h5 className="font-semibold mb-0 tracking-wide text-black font-headings capitalize">
        {userData?.name}
      </h5>
  
     <NavDropDown/>
    </div>
  );
}

function NavDropDown() {
  return (
    <Modal>
      <Modal.Open opens="PageUserModal">
        <HiChevronDown className="text-stone-900 " />
      </Modal.Open>
      <Modal.Window name="PageUserModal">
        <UserNavModal />
      </Modal.Window>
    </Modal>
  );
}
