import React, { useState } from "react";
import InfoPage from "../BusinessInfo/InfoPage";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { TiDownloadOutline } from "react-icons/ti";
import { GiShakingHands } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Avatar from "react-avatar-edit";
import useFetch from "../../features/signin/Signin-com/useFetch";

const StepperPage = () => {
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [nin, setNin] = useState("");
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const { fetchData, error, loading } = useFetch(
    "https://techeat-server-1.onrender.com/api/auth/register",
    "POST"
  );

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const data = await fetchData(formData, true);
        console.log(data);
        alert("File uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Error uploading file: " + error.message);
      }
    } else {
      alert("Please select a file to upload");
    }
  };

  const authenticateNin = () => {
    // Simple NIN authentication logic
    const isValidNin = nin.length === 11;
    return isValidNin;
  };

  const handleSubmit = () => {
    if (authenticateNin()) {
      // handleFileUpload();
      nextStep();
    } else {
      alert("Invalid NIN. Please enter a valid NIN.");
    }
  };

  

  return (
    <div className="absolute top-[4.5rem] xl:left-[3rem] left-0 flex items-center justify-center xl:bg-transparent h-[34rem]">
      <div className="xl:bg-transparent xl:p-8 p-3 rounded-lg w-full max-w-md">
        {/* CIRCULAR DIV FOR THE STEP MOVEMENT */}
        <div className="flex justify-between items-center mb-[5rem] w-[5rem] xl:ml-[9rem] ml-[8rem]">
          <div className={`step ${step >= 1 ? "active" : ""}`}></div>
          <div className={`step ${step >= 2 ? "active" : ""}`}></div>
          <div className={`step ${step >= 3 ? "active" : ""}`}></div>
        </div>

        {/* BUSINESS REGISTRATION PHASE */}
        {step === 1 && (
          <div className="xl:mt-[-2rem]">
            <h2 className="text-[16px] font-extrabold mb-4 text-white">
              Lets spice up your food brands visibility!
            </h2>
            <h4 className="text-[10px] w-[300px] text-slate-300 mt-[1rem]">
              Elevate Your Food Brand's Visibility with Innovative Strategies to
              Captivate and Engage your Target Audience
            </h4>
            <div>
              <div>
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

        {/* VERIFICATION STAGE */}
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
                  <div className="w-[12rem] h-[18rem] flex justify-center items-center flex-col ">
                    <Avatar
                      width={300}
                      height={280}
                      oncrop={onCrop}
                      onclose={onClose}
                      src={src}
                      // onChange={handleFileChange}
                      // type="file"
                      className=" relative flex justify-center items-center flex-col bg-orange-500 cursor-pointer w-[200px]"
                    />
                    {/* <span
                      onClick={handleFileUpload}
                      className="flex gap-2 justify-center items-center cursor-pointer bg-orange-500 mt-[.5rem] absolute"
                    >
                      <p className="text-slate-100 font-bold mt-[1.2rem] p-3">
                        Upload
                      </p>
                      <TiDownloadOutline className="h-[1rem] w-[1rem]" />
                    </span> */}
                  </div>
                </div>

                <div className="Input-Data mt-[1rem]">
                  <label className="text-[12px]">
                    National Identification Number (NIN)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="MainTime"
                      placeholder="Enter your NIN"
                      value={nin}
                      onChange={(e) => setNin(e.target.value)}
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
                  onClick={handleSubmit}
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
                <img
                  src="/images/Group.png"
                  alt="New_pics"
                  className=" text-black w-[6rem] h-[6rem] rounded-full mt-[-3rem] mb-[3rem]"
                />
              </div>
              <p className="text-slate-200 text-center w-full text-[12px]">
                Thank you for submitting the details. we will review and respond
                to you as soon as possible.
              </p>
              <Link to="/signin">
                <button className="bg-orange-500 w-full h-[3rem] shadow-2xl mt-[3rem] font-bold">
                  Let's get started!
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
