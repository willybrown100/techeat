import { LinkOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleBar } from "../utils/sideBarSlice";

function ModalMenu (){
  const open = useSelector((state) => state.sideBar.open);
  const dispatch = useDispatch()
  const handleClick = function(){
dispatch(toggleBar(!open));
  }
return (
  <motion.div
    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
    animate={{ scale: 1, opacity: 1 }}
    className="min-w-[70vw] flex flex-col bg-white md:hidden items-center justify-between z-10  dark:bg-light/75 backdrop-blur-md rounded-lg py-[4.5rem] fixed top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
  >
    <nav className="flex flex-col capitalize text-black text-center gap-y-6 items-center justify-center">
      <ul className="flex flex-col mb-5 gap-y-4">
        <li onClick={handleClick}>
          {" "}
          <Link
            to="/"
            className="capitalize text-black hover:text-brand font-semibold text-[1rem]"
          >
            home
          </Link>
        </li>
        <li onClick={handleClick}>
          {" "}
          <Link
            className="font-semibold text-black hover:text-brand text-[1rem]"
            to="/menu"
          >
            menu
          </Link>{" "}
        </li>
        <li onClick={handleClick}>
          <Link
            to="/about"
            className="hover:text-brand text-black tracking-[1px] text-[1rem] font-semibold"
          >
            about us
          </Link>
        </li>
        <li onClick={handleClick}>
          {" "}
          <Link
            to="contact"
            className="font-semibold text-black hover:text-brand text-[1rem]"
          >
            contact us
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col items-center gap-y-6">
        <li onClick={handleClick}>
          <Link
            to="contactus"
            className="border-brand border px-16 tracking-wide py-2 rounded-md text-brand"
          >
            login
          </Link>
        </li>
        <li  onClick={handleClick}>
          <Link
            to="contactus"
            className="bg-brand py-2 rounded-md font-semibold text-white px-4"
          >
            sign up as a student
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="contactus"
            className="bg-brand py-2 rounded-md  font-semibold text-white px-[1.1rem]"
          >
            sign up as a vendor
          </Link>
        </li>
      </ul>
    </nav>
  </motion.div>
);

}
export default ModalMenu
