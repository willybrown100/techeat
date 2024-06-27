import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleBar } from "../utils/sideBarSlice";

function Navbar() {
     const className = "max-w-[1170px]   w-[90vw]  m-auto";
  const dispatch=useDispatch()
  const open = useSelector((state)=>state.sideBar.open)
  console.log(open)
  const handleClick =function(){
dispatch(toggleBar(!open))
  }
 return (
   <nav className={`bg-white ${className} py-2 `}>
     <div className="flex items-center justify-between">
       <Logo />
       <button
         className="text-stone-900 text-2xl sm:hidden"
         onClick={handleClick}
       >
         <FaBars />
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
     </div>
   </nav>
 );
}

export default Navbar
