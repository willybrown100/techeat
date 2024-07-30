import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleBar } from "../utils/sideBarSlice";
import ModalMenu from "./ModalMenu";
import useUser from '../hooks/useUser';
import UserAvatar from './UserAvatar';
import NavUserAvatar from '../ui/NavUserAvatar';
import { UserContext } from '../authUser';

function Navbar() {
  // const { authUserData } = useUser();
  const { authUserData, userId } = useUser();
  const { userData, loading, setUserData, setLoading } = useContext(UserContext);
  const session= authUserData?.token
 const [isFixed, setIsFixed] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);


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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
console.log(scrollTop)
      if (scrollTop > lastScrollTop) {
        // User is scrolling down
        setIsFixed(true);
      } else {
        // User is scrolling up
        setIsFixed(false);
      }
      
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);


     const className = "max-w-[1170px]   w-[90vw]  m-auto";
  const dispatch=useDispatch()
  const open = useSelector((state)=>state.sideBar.open)
  const handleClick =function(){
dispatch(toggleBar(!open))
  }
 return (
   <>
     <nav className={` bg-white ${isFixed ? "navfixed " : ""}`}>
       <article className={` ${className} py-2 `}>
         <div className="flex items-center justify-between">
           <Logo />
           <button
             className="text-stone-900 text-2xl sm:hidden"
             onClick={handleClick}
           >
             <FaBars className=" text-white w-[2rem] h-[2rem] p-[5px] bg-brand rounded-full" />
           </button>

           <ul className=" hidden  md:flex items-center justify-between gap-6">
             <li>
               <NavLink
                 to="/"
                 className="text-xl  capitalize hover:text-brand text-black font-semibold"
               >
                 Home
               </NavLink>
             </li>
             <li>
               <NavLink
                 to="/menu"
                 className="text-xl capitalize hover:text-brand text-black font-semibold"
               >
                 menu
               </NavLink>
             </li>
             <li>
               <NavLink
                 to="/about"
                 className="text-xl capitalize hover:text-brand text-black font-semibold"
               >
                 about Us
               </NavLink>
             </li>
             <li>
               <NavLink
                 to="/contact"
                 className="text-xl capitalize hover:text-brand text-black font-semibold"
               >
                 contact Us
               </NavLink>
             </li>
           </ul>
           {session ? (
             <NavUserAvatar />
           ) : (
             <ul className=" hidden  md:flex items-center  justify-between gap-4">
               <li>
                 <Link
                   to="/signin"
                   className="capitalize text-brand border border-brand py-[5px] px-4 font-semibold rounded-md  "
                 >
                   login
                 </Link>
               </li>
               <li className="text-stone-100">
                 <Link
                   to="/signup"
                   className=" capitalize font-semibold py-[6px] px-3 rounded-md bg-brand text-white"
                 >
                   sign Up
                 </Link>
               </li>
             </ul>
           )}
         </div>
       </article>
     </nav>
     {open && <ModalMenu />}
   </>
 );
}
// 
export default Navbar


// const Navbar = () => {
  //   const [isFixed, setIsFixed] = useState(false);
  //   const [lastScrollTop, setLastScrollTop] = useState(0);
  
  //   useEffect(() => {
    //     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;

//       if (scrollTop > lastScrollTop) {
//         // User is scrolling down
//         setIsFixed(true);
//       } else {
//         // User is scrolling up
//         setIsFixed(false);
//       }
      
//       setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollTop]);

//   return (
//     <nav className={navbar ${isFixed ? 'fixed' : ''}}>
//       <h1>My Navbar</h1>
//     </nav>
//   );
// };

// export default Navbar;