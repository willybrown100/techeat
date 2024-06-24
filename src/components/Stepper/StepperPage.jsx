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
    <div className="absolute top-[4.5rem] left-[3rem] flex items-center justify-center bg-transparent h-[34rem]">
      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* CIRCULAR DIV FOR THE STEP MOVEMENT */}
        <div className="flex justify-between items-center mb-[5rem] w-[5rem] ml-[9rem]">
          <div className={`step ${step >= 1 ? "active" : ""}`}></div>
          <div className={`step ${step >= 2 ? "active" : ""}`}></div>
          <div className={`step ${step >= 3 ? "active" : ""}`}></div>
        </div>

        {/* BUSINESS REGISTRATION PHASE */}

        {step === 1 && (
          <div className="mt-[-2rem]">
            <h2 className="text-[16px] font-extrabold mb-4 text-white">
              Lets spice up your food brands visibility!
            </h2>
            <h4 className="text-[10px] w-[300px] text-slate-300 mt-[1rem]">
              Elevate Your Food Brand's Visibility with Innovative Strategies to
              Captivate and Engage your Target Audience
            </h4>
            <div>
              {/* <div className="mb-[1rem]">
                <FaRegArrowAltCircleLeft className="text-orange-500 " />
              </div> */}
              <div>
                {/* <h1 className="font-Roboto Slab w-[400px] font-bold text-[12px] text-left text-white">
                  Business Information
                </h1>
                <h4 className="text-[10px] w-[250px] text-left text-slate-400">
                  Please provide the required information of your business for
                  future reference purposes
                </h4> */}

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
                  className="w-full h-[3.2rem] bg-orange-500 font-bold"
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
              <div className="mb-[.5rem]">
                <FaRegArrowAltCircleLeft
                  onClick={prevStep}
                  className="text-slate-500 cursor-pointer w-[1.1rem] h-[1.1rem]"
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
                <div className="flex justify-center items-center border-dashed border-white shadow-2xl rounded">
                  <div className="w-[12rem] h-[18rem] flex justify-center items-center">
                    <button className="flex justify-center items-center bg-orange-500 pl-2 pr-2 pt-3">
                      <span className="flex gap-2 justify-center items-center">
                        <p className="text-slate-100 font-bold">Browse</p>
                        <TiDownloadOutline className="mt-[-1rem]" />
                      </span>
                    </button>
                  </div>
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
                  className="w-full h-[3.2rem] bg-orange-500 font-bold"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* GET STARTED PHASE */}

        {step === 3 && (
          <div className="h-[22rem]">
            <FaRegArrowAltCircleLeft
              onClick={prevStep}
              className="text-slate-500 w-[1.5rem] h-[1.5rem] cursor-pointer mt-[6rem]"
            />
            <div className="mt-[3rem] w-full">
              <div className="flex justify-center">
                <GiShakingHands className=" text-black bg-orange-500 w-[6rem] h-[6rem] rounded-full mt-[-3rem] mb-[3rem]" />
              </div>
              <p className="text-slate-200 text-center w-full text-[12px]">
                Thank you for submitting the details. we will review and respond
                to you as soon as possible.
              </p>
              <Link to="/Signin">
                <button className="bg-orange-500 w-full h-[3rem] shadow-2xl mt-[3rem] font-bold">
                  Let’s get started!
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
