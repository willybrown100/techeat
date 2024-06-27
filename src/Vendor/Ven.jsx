import React from "react";
import "./../Signs-Customer/Content.scss"; // Import stylesheet
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io"; // Import eye-off icon
import { Link } from "react-router-dom"; // Import Link component for navigation
import Button from "./../Signs-Customer/Signup-Ui/Button"; // Import Button component
import { IoIosEye } from "react-icons/io";
import StepperPage from "../components/Stepper/StepperPage";


const Ven = () => {
  const [open, setOpen] = useState(false);

  const ToggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="ml-[ ]">
       
      <form className="">
      
        <h1 className="font-Roboto Slab w-[400px] font-bold text-[18px] text-left text-white">
          Lets spice up your food brands visibility
        </h1>
        <h4 className="text-[10px] w-[250px] text-left text-slate-400">
          Elevate Your Food Brand's Visibility with Innovative Strategies to
          Captivate and Engage your Target Audience
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
              type={!open === false ? "Password" : "text"}
              className="MainTime"
              placeholder="Enter your Password"
            />
            <span className="absolute right-3 cursor-pointer">
              {open ? (
                <IoIosEyeOff
                  className="cursor-pointer w-[2rem] h-[2rem] pb-[.8rem]"
                  onClick={ToggleOpen}
                />
              ) : (
                <IoIosEye
                  onClick={ToggleOpen}
                  className="cursor-pointer w-[2rem] h-[2rem] pb-[.8rem]"
                />
              )}
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
      <StepperPage />
    </div>
  );
};

export default Ven;
