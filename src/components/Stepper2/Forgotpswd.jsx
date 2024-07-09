import React, { useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "./../../features/signup/useFetch";

const Forgotpswd = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    data: forgotData,
    error: forgotError,
    loading: forgotLoading,
    fetchData: forgotFetchData,
  } = useFetch("https://techeat-server-1.onrender.com/api/auth/forgot-password", "POST");
  const {
    data: resetData,
    error: resetError,
    loading: resetLoading,
    fetchData: resetFetchData,
  } = useFetch("https://techeat-server-1.onrender.com/api/auth/forgot-password", "POST");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSendEmail = async () => {
    try {
      const response = await forgotFetchData({ email });
      if (response) {
        nextStep();
      } else {
        alert("Failed to send reset instructions. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    try {
      const response = await resetFetchData({
        email,
        newPassword,
      });
      if (response) {
        nextStep();
      } else {
        alert("Failed to reset password. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }

    // reset();
  };

  return (
    <div className="absolute top-[4.5rem] xl:left-[6rem] flex items-center justify-center bg-transparent h-[38rem]">
      <div className="bg-transparent xl:p-8 rounded-lg shadow-lg w-full h-[34rem]">
        <div className="flex justify-between items-center mb-[5rem] w-[5rem] ml-[6.5rem]">
          <div className={`step ${step >= 1 ? "active" : ""}`}></div>
          <div className={`step ${step >= 2 ? "active" : ""}`}></div>
          <div className={`step ${step >= 3 ? "active" : ""}`}></div>
          <div className={`step ${step >= 4 ? "active" : ""}`}></div>
        </div>

        {step === 1 && (
          <div className="mt-[-2rem]">
            <h2 className="text-[16px] font-extrabold mb-4 text-white text-center">
              Forgot! your password
            </h2>
            <h4 className="text-[10px] w-[300px] text-slate-300 mt-[4rem] text-center">
              Please confirm the e-mail associated with your account for you to
              proceed to retrieving your account
            </h4>
            <div>
              <div className="mt-[4.5rem] mb-[2rem]">
                <label className="text-[12px]">E-mail</label>
                <br />
                <input
                  type="email" 
                  className="w-[100%] bg-transparent outline-0 border-0 border-b"
                  placeholder="Enter your E-mail"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>

            <button
              onClick={handleSendEmail}
              className="w-full h-[3.2rem] bg-orange-500 font-bold mb-[1rem] mt-[4rem]"
              disabled={forgotLoading}
            >
              {forgotLoading ? "Sending..." : "Send E-Mail"}
            </button>
            <div className="w-[8rem] shadow-2xl ml-[5rem] p-1 rounded-full bg-transparent cursor-pointer">
              <h4 className="text-center text-[12px] pt-2">
                Return to
                <Link to="/signin">
                  <span>Sign-in</span>
                </Link>
              </h4>
            </div>
            {forgotError && (
              <p className="text-red-500 text-center mt-4">
                Failed to send reset instructions. Please try again.
              </p>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="w-[18rem]">
            <div className="mb-[.5rem]">
              <FaRegArrowAltCircleLeft
                onClick={prevStep}
                className="text-slate-500 cursor-pointer w-[1.1rem] h-[1.1rem]"
              />
            </div>
            <div>
              <h1 className="font-Roboto Slab w-[18rem] font-bold text-[18px] text-center text-white">
                Check Your E-mail
              </h1>

              <div className="w-[64px] ml-[6rem]">
                <img
                  className="w-[100%]"
                  src="/images/Vector1.png"
                  alt="Arrow-Email"
                />
              </div>

              <div className="Input-Data mt-[1rem]">
                <h2 className="text-[12px] text-center">
                  We’ve sent an e-mail to the address
                </h2>
                <h4 className="text-center">{email}</h4>

                <div className="">
                  <h1 className="text-[10px] text-center w-[200px] ml-[2.5rem] mb-[4rem]">
                    Please check your inbox (and your spam folder just in case)
                    for an e-mail from Tech Eats.
                  </h1>
                </div>
              </div>
              <button
                onClick={nextStep}
                className="w-full h-[3.2rem] bg-orange-500 font-bold"
              >
                Open E-Mail
              </button>
              <div>
                <h4 className="text-center mt-[2rem] text-[12px]">
                  Return to{" "}
                  <Link to="/signin">
                    <span className="font-bold underline cursor-pointer">
                      Sign-in
                    </span>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="h-[22rem] w-full mt-[-3rem]">
            <div className="w-full">
              <FaRegArrowAltCircleLeft
                onClick={prevStep}
                className="text-slate-500 w-[1.5rem] h-[1.5rem] cursor-pointer mt-[6rem]"
              />
            </div>
            <div className="mt-[3rem] w-[18rem]">
              <div className="">
                <h1 className="text-[24px]">Reset Password</h1>
                <p className="text-[12px]">The old password cannot be used.</p>
              </div>
              <div>
                <div className="Input-Data mt-[1rem]">
                  <label className="text-[12px]">New Password</label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="MainTime"
                      placeholder="Enter your Password"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                    />
                    <span
                      className="absolute right-3 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <IoIosEyeOff className="cursor-pointer w-[2rem] h-[2rem] pb-[.8rem]" />
                      ) : (
                        <IoIosEye className="cursor-pointer w-[2rem] h-[2rem] pb-[.8rem]" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="Input-Data mt-[1rem]">
                  <label className="text-[12px]">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="MainTime"
                      placeholder="Enter your Password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                    <span
                      className="absolute right-3 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <IoIosEyeOff className="cursor-pointer w-[2rem] h-[2rem] pb-[.8rem]" />
                      ) : (
                        <IoIosEye className="cursor-pointer w-[2rem] h-[2rem] pb-[.8rem]" />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleResetPassword}
                  className="bg-orange-500 w-full h-[3rem] shadow-2xl mt-[3rem] font-bold"
                  disabled={resetLoading}
                >
                  {resetLoading ? "Resetting..." : "Reset Password!"}
                </button>
              </div>
              {resetError && (
                <p className="text-red-500 text-center mt-4">
                  Failed to reset password. Please try again.
                </p>
              )}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className=" w-[18rem]">
            <FaRegArrowAltCircleLeft
              onClick={prevStep}
              className="text-slate-500 w-[1.5rem] h-[1.5rem] cursor-pointer mt-[6rem]"
            />
            <div className="">
              <div className="w-[84px] ml-[6rem] mb-[3rem]">
                <img
                  className="w-[100%]"
                  src="/images/Vector.png"
                  alt="CompletedCaseWork"
                />
              </div>
              <p className="text-slate-200 text-center w-full text-[12px]">
                Your Password has been successfully changed!
              </p>
              <button
                onClick={() => navigate("/signin")}
                className="bg-orange-500 w-full h-[3rem] shadow-2xl mt-[3rem] font-bold cursor-pointer"
              >
                Sign In!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forgotpswd;
