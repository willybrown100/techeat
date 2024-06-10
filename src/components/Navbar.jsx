import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
 return (
   <nav className=" bg-white  py-4 px-9 ">
     <div className="flex items-center justify-between">
       <button className="text-stone-200 text-2xl sm:hidden">
         {open ? (
           <i className="fas fa-times"></i>
         ) : (
           <i className="fas fa-bars"></i>
         )}
       </button>
       <Logo />

       <ul className=" hidden  sm:flex items-center justify-between gap-6">
        <li>
         <NavLink
           to="/"
           className="text-xl capitalize text-black font-semibold"
           >
           Home
         </NavLink>
           </li>
           <li>

         <NavLink
           to="/menu"
           className="text-xl capitalize text-black font-semibold"
           >
           menu
         </NavLink>
           </li>
           <li>

         <NavLink
           to="/aboutus"
           className="text-xl capitalize text-black font-semibold"
           >
           aboutUs
         </NavLink>
           </li>
           <li>

         <NavLink
           to="/contactus"
           className="text-xl capitalize text-black font-semibold"
           >
           contactUs
         </NavLink>
           </li>
       </ul>
       <ul className=" hidden  sm:flex items-center  justify-between gap-6">
        <li>
        <Link to="" className="capitalize text-brand border border-brand py-[2px] px-4 font-semibold rounded-md  ">login</Link>
        </li>
        <li className="text-stone-100">
        <Link to="" className=" capitalize font-semibold py-[4px] px-2 rounded-md bg-brand text-white">sign Up</Link>
        </li>
       </ul>
     </div>
   </nav>
 );
}

export default Navbar
