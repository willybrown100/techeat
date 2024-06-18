import React from "react";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import ButtonSignin from "./ButtonSignin";

const Contact = () => {
  return (
    <div className="">
      <form className=" absolute left-[8rem] bg-opacity-10 bg-white backdrop-blur-xl shadow-2xl w-[550px] h-[45rem] mt-[-4rem] p-[5rem]">
        <h1 className=" font-Roboto Slab w-[400px] font-bold text-[22px] text-left text-white">
          Welcome Back! <span className="text-[12px]">to your account</span>
        </h1>
        <h4 className=" text-[10px] w-[220px] text-left text-slate-300">
          Sign in to fuel your learning journey with delicious meals delivered
          right to your door.
        </h4>
        <div className="flex justify-between items-center mt-[2rem]">
          <div className="flex gap-[.6rem] items-center">
            <div className="">
              <input
                className="accent-orange-500"
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
              />
            </div>
            <span>
              <h4 className="text-[10px] mt-[.4rem]  backdrop-blur-xl bg-opacity-30 p-[.4rem] shadow-2xl shadow-slate-100 cursor-pointer rounded-full hover:text-orange-500">
                Sign in as a customer
              </h4>
            </span>
          </div>
          <div className="flex gap-[.6rem] items-center">
            <div className="">
              <input
                className="accent-orange-500"
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
              />
            </div>
            <span>
              <h4 className="text-[10px] mt-[.4rem]  backdrop-blur-xl  bg-opacity-30 p-[.4rem] shadow-2xl shadow-slate-100 cursor-pointer rounded-full hover:text-orange-500">
                Sign in as a vendor
              </h4>
            </span>
          </div>
        </div>
        <div className="mt-[1rem]">
          <label className="text-[12px]">Name</label>
          <br></br>
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
          <span>
            <input className="accent-orange-500" type="checkbox" />
          </span>
          <span>
            <p className="text-[10px] mt-[1rem]">
              I have read to understand the{" "}
              <Link to="/Policy">
                <span className="font-bold text-orange-500 cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              and agree to the
              <Link to="/TermsOfService">
                <span className="font-bold text-orange-500 cursor-pointer">
                  Terms of service
                </span>
              </Link>
            </p>
          </span>
        </div>
        <div>
          <ButtonSignin />
          <div className="flex justify-center items-center gap-1 mt-[2rem]">
            <hr className=" w-[12rem] bg-slate-800" />
            <h4 className="pt-[.4rem] text-[12px]">or</h4>
            <hr className=" w-[12rem] bg-slate-800" />
          </div>
          <div className="mt-[1rem]">
            <button className="w-full h-[3.2rem] bg-slate-800 mt-[1rem]">
              <span className="flex justify-center items-center gap-2">
                <div className="w-[24px]">
                  <img
                    className="w-[100%]"
                    src="/images/google-icon.png"
                    alt="googleIcon"
                  />
                </div>
                <p className="mt-[1.1rem]">Sign in with Google</p>
              </span>
            </button>
          </div>
        </div>
        <p className="text-center text-[12px] mt-[.9rem]">
          Don't have an account?{" "}
          <Link to="/signUp">
            <span className="underline uppercase font-bold cursor-pointer">
              Sign Up
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Contact;
