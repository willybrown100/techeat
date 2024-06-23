import React, { useState } from "react";
import InfoPage from "../BusinessInfo/InfoPage";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { TiDownloadOutline } from "react-icons/ti";
import { GiShakingHands } from "react-icons/gi";
import { Link } from "react-router-dom";

const StepperPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="absolute top-[5rem] left-[3rem] flex items-center justify-center bg-transparent">
      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* CIRCULAR DIV FOR THE STEP MOVEMENT */}
        <div className="flex justify-between items-center mb-8 w-[5rem] ml-[8rem]">
          <div className={`step ${step >= 1 ? "active" : ""}`}></div>
          <div className={`step ${step >= 2 ? "active" : ""}`}></div>
          <div className={`step ${step >= 3 ? "active" : ""}`}></div>
        </div>

        {/* BUSINESS REGISTRATION PHASE */}

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">Registration</h2>
            <div>
              <div>
                <FaRegArrowAltCircleLeft className="text-black" />
              </div>
              <div>
                <h1 className="font-Roboto Slab w-[400px] font-bold text-[18px] text-left text-white">
                  Business Information
                </h1>
                <h4 className="text-[10px] w-[250px] text-left text-slate-400">
                  Please provide the required information of your business for
                  future reference purposes
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
                <button
                  onClick={nextStep}
                  className="w-full h-[3.2rem] bg-orange-500"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VERIFICATION STAGE: */}

        {step === 2 && (
          <div>
            <div>
              <div>
                <FaRegArrowAltCircleLeft
                  onClick={prevStep}
                  className="text-black"
                />
              </div>
              <div>
                <h1 className="font-Roboto Slab w-[400px] font-bold text-[18px] text-left text-white">
                  Business Verification
                </h1>
                <h4 className="text-[10px] w-[250px] text-left text-slate-400">
                  We would require you to upload a photo of yourself and your
                  NIN number for further legibility proof.
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
                  <label className="text-[12px]">
                    National Identification Number (NIN)
                  </label>
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
                <button
                  onClick={nextStep}
                  className="w-full h-[3.2rem] bg-orange-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* GET STARTED PHASE */}

        {step === 3 && (
          <div>
            <FaRegArrowAltCircleLeft
              onClick={prevStep}
              className="text-black"
            />
            <div>
              <div className="flex justify-center">
                <GiShakingHands className="bg-slate-300 text-orange-500 w-[12rem] h-[12rem] rounded-full" />
              </div>
              <p className="text-black">
                Thank you for submitting the details. we will review and respond
                to you as soon as possible.
              </p>
              <button>Let’s get started</button>
            </div>
            <div className="flex justify-between">
              <Link to="/Signin">
                <button className="bg-green-500 text-white p-2 rounded">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperPage;
