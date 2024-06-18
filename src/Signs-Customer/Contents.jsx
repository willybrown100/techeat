import React, { useState } from "react"; // Import React and useState hook
import "./Content.scss"; // Import stylesheet
import { IoIosEyeOff } from "react-icons/io"; // Import eye-off icon
import { Link } from "react-router-dom"; // Import Link component for navigation
import Button from "./Signup-Ui/Button"; // Import Button component
import Ven from "../Vendor/Ven";

const Contents = () => {
  // Declare a state variable 'toggle' with a default value of false
  const [toggle, setToggle] = useState(false);

  // Handler to toggle the state when radio buttons are clicked
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="content-wrapper form-container absolute bg-opacity-10 bg-white backdrop-blur-xl shadow-2xl w-[550px] h-[44rem] top-[38rem] right-[5rem] p-[5rem]">
      <div className="flex justify-between items-center mt-[-2rem]">
        <div className="flex gap-[.6rem] items-center">
          <input
            onClick={handleToggle}
            className="accent-orange-500"
            type="radio"
            name="user_type"
            value="Customer"
          />
          <h4 className="text-[10px] mt-[.4rem] backdrop-blur-xl bg-opacity-30 p-[.4rem] shadow-2xl shadow-slate-100 cursor-pointer rounded-full hover:text-orange-500">
            Sign up as a customer
          </h4>
        </div>
        <div className="flex gap-[.6rem] items-center">
          <input
            onClick={handleToggle}
            className="accent-orange-500"
            type="radio"
            name="user_type"
            value="Vendor"
          />
          <h4 className="text-[10px] mt-[.4rem] backdrop-blur-xl bg-opacity-30 p-[.4rem] shadow-2xl shadow-slate-100 cursor-pointer rounded-full hover:text-orange-500">
            Sign up as a vendor
          </h4>
        </div>
      </div>

      {/* Conditionally render the form fields based on 'toggle' state */}
      {toggle ? (
        <>
          <form className="">
            <h1 className="font-Roboto Slab w-[400px] font-bold text-[22px] text-left text-white">
              Welcome to TECH EATS
            </h1>
            <h4 className="text-[10px] w-[200px] text-left text-slate-400">
              Fuel your mind with tech skills and your body with gourmet meals
            </h4>

            <div className="mt-[1rem]">
              <label className="text-[12px]">Name</label>
              <br />
              <input
                type="text"
                className="w-[100%] bg-transparent outline-0 border-0 border-b"
                placeholder="Enter your Full Name"
              />
            </div>
            <div className="Input-Data mt-[1rem]">
              <label className="text-[12px]">E-mail</label>
              <input
                type="text"
                className="MainTime"
                placeholder="Enter your email"
              />
            </div>
            <div className="Input-Data mt-[1rem]">
              <label className="text-[12px]">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="MainTime"
                  placeholder="Enter your Password"
                />
                <span className="absolute right-3">
                  <IoIosEyeOff />
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[1rem]">
              <input className="accent-orange-500" type="checkbox" />
              <p className="text-[10px] mt-[1rem]">
                I have read and understand the{" "}
                <Link
                  to="/Policy"
                  className="font-bold text-orange-500 cursor-pointer"
                >
                  Privacy Policy
                </Link>
                and agree to the{" "}
                <Link
                  to="/TermsOfService"
                  className="font-bold text-orange-500 cursor-pointer"
                >
                  Terms of Service
                </Link>
              </p>
            </div>
            <Button />
            <div className="flex justify-center items-center gap-1 mt-[2rem]">
              <hr className="w-[12rem] bg-slate-800" />
              <h4 className="pt-[.4rem] text-[12px]">or</h4>
              <hr className="w-[12rem] bg-slate-800" />
            </div>
            <button className="w-full h-[3.2rem] bg-slate-800 mt-[1rem]">
              <span className="flex justify-center items-center gap-2">
                <img
                  className="w-[24px]"
                  src="/images/google-icon.png"
                  alt="googleIcon"
                />
                <p className="mt-[1.1rem]">Sign in with Google</p>
              </span>
            </button>
            <p className="text-center text-[12px] mt-[.9rem]">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="underline uppercase font-bold cursor-pointer"
              >
                Sign in
              </Link>
            </p>
          </form>
        </>
      ) : (
        <>
          <Ven/>
        </> // Rendered when 'toggle' is false
      )}
    </div>
  );
};

export default Contents;
