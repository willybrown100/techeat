import { HiHome } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { HiBuildingOffice2, HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaShopify, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleBar } from "../utils/sideBarSlice";
import { FaBowlFood } from "react-icons/fa6";

function Sidebar() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.sideBar.open);
  console.log(open);
  const closeBar = function () {
    dispatch(toggleBar(!open));
  };
  return (
    <aside
      className={`fixed bottom-0 top-0 px-2 py-4 z-10 translate-x-[-100%] right-1/3 left-0  bg-stone-100 
       ${open ? "translate-x-[0%]" : ""}
  
       transition-all duration-300`}
    >
      <div className="py-16 grid grid-rows-[auto,1fr,auto] gap-8 h-screen">
        <div className="mx-auto">
          <Logo />
        </div>
        <div className="flex flex-col">
          <NavLink
            to="/"
            className="text-stone-900 p-4 flex gap-2 items-center capitalize tracking-[2px] text-xl hover:bg-stone-300 transition-all duration-300"
            onClick={closeBar}
          >
            <span>
              <HiHome />
            </span>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-stone-900 p-4 capitalize flex gap-2 items-center hover:bg-stone-300 transition-all duration-300 tracking-[2px] text-xl"
            onClick={closeBar}
          >
            <span>
              <HiBuildingOffice2 />
            </span>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-stone-900 p-4 capitalize flex gap-2 items-center tracking-[2px] hover:bg-stone-300 transition-all duration-300 text-xl"
            onClick={closeBar}
          >
            <span>
              <HiChatBubbleLeftEllipsis />
            </span>
            Contact
          </NavLink>

          <NavLink
            to="/menu"
            className="text-stone-900 p-4 capitalize flex gap-2 items-center hover:bg-stone-300 transition-all duration-300 tracking-[2px] text-xl"
            onClick={closeBar}
          >
            <span>
              <FaBowlFood />
            </span>
            menu
          </NavLink>
          <div>
          
            <ul className="  flex flex-col p-4 gap-6">
              <li>
                <Link
                  to="/signin"
                  className="capitalize text-brand border border-brand py-[2px] px-4 font-semibold rounded-md  "
                >
                  login
                </Link>
              </li>
              <li className="text-stone-100">
                <Link
                  to="/signup"
                  className=" capitalize font-semibold py-[4px] px-2 rounded-md bg-brand text-white"
                >
                  sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3 justify-center ">
          <Link
            to="home"
            className="text-brand text-2xl transition-all hover:text-amber-500 duration-300"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="contact"
            className="text-brand text-2xl transition-all hover:text-amber-500 duration-30"
          >
            <FaTwitter />
          </Link>
          <Link
            to="about"
            className="text-brand text-2xl transition-all hover:text-amber-500 duration-30"
          >
            <FaInstagram />
          </Link>
          <Link
            to="about"
            className="text-brand text-2xl transition-all hover:text-amber-500 duration-30"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
