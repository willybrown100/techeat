import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const InfoPage = () => {
  return (
    <div>
      <div>
        <FaRegArrowAltCircleLeft />
      </div>
      <div>
        <h1 className="font-Roboto Slab w-[400px] font-bold text-[18px] text-left text-white">
          Business Information
        </h1>
        <h4 className="text-[10px] w-[250px] text-left text-slate-400">
          Please provide the required information of your business for future
          reference purposes
        </h4>

        <div className="mt-[1rem]">
          <label className="text-[12px]">Business Name</label>
          <br />
          <input
            type="text"
            className="w-[100%] bg-transparent outline-0 border-0 border-b"
            placeholder="Enter your Business Name"
          />
        </div>
        <div className="Input-Data mt-[1rem]">
          <label className="text-[12px]">Business Address</label>
          <input
            type="text"
            className="MainTime"
            placeholder="Enter your Business site Address"
          />
        </div>
        <div className="Input-Data mt-[1rem]">
          <label className="text-[12px]">Phone</label>
          <div className="relative">
            <input
              type="Phone Number"
              className="MainTime"
              placeholder="Enter your Mobile Number"
            />
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
        <button className="w-full h-[3.2rem] bg-orange-500">Proceed</button>
      </div>
    </div>
  );
}
export default InfoPage;