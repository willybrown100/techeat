import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { TiDownloadOutline } from "react-icons/ti";

export default function Verification() {
  return (
    <div>
      <div>
        <div>
          <FaRegArrowAltCircleLeft />
        </div>
        <div>
          <h1 className="font-Roboto Slab w-[400px] font-bold text-[18px] text-left text-white">
            Business Verification
          </h1>
          <h4 className="text-[10px] w-[250px] text-left text-slate-400">
            We would require you to upload a photo of yourself and your NIN
            number for further legibility proof.
          </h4>
          <div className="w-[10rem] h-[18rem] border-dashed">
            <button className="flex justify-center items-center bg-orange-500">
              <span className="flex gap-2">
                <p className="text-slate-100">Browse</p>
                <TiDownloadOutline />
              </span>
            </button>
          </div>

          <div className="Input-Data mt-[1rem]">
            <label className="text-[12px]">National Identification Number (NIN)</label>
            <div className="relative">
              <input
                type="Password"
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
          <button className="w-full h-[3.2rem] bg-orange-500">Submit</button>
        </div>
      </div>
    </div>
  );
}
