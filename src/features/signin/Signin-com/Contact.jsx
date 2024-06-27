import React, { useState } from "react";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Vend2 from "../../../Vendor/Vend2";
import Forgotpswd from "../../../components/Stepper2/Forgotpswd";
import { useForm } from "react-hook-form";
import useFetch from './useFetch'; 

const Contact = () => {
  // State for toggling between customer, vendor, and forgot password views
  const [view, setView] = useState("customer");
  // State for toggling password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  // Initialize the useForm hook
  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm();

  // Use the custom useFetch hook
  const { fetchData, loading, error } = useFetch('/api/auth/signin', 'POST');

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Function to handle form submission
  const onSubmit = async (data) => {
    await fetchData({
      email: data.Email,
      password: data.Password,
    });

    if (!error) {
      // Navigate to Home Page
      navigate("/");
    } else {
      alert("Sign-in failed. Please try again.");
    }

    reset();
  };

  return (
    <div className="absolute left-[8rem] bg-opacity-10 bg-white backdrop-blur-xl w-[550px] h-[45rem] top-[38.8rem] p-[5rem]">
      {/* Radio buttons to select user type (customer/vendor) */}
      <div className="flex justify-between items-center mt-[-1rem]">
        <div className="flex gap-[.6rem] items-center">
          <input
            onClick={() => setView("customer")}
            className="accent-orange-500 cursor-pointer"
            type="radio"
            name="user_type"
            checked={view === "customer"}
          />
          <span onClick={() => setView("customer")}>
            <h4 className="text-[10px] mt-[.4rem] backdrop-blur-xl bg-opacity-30 p-[.4rem] shadow-2xl shadow-slate-100 cursor-pointer rounded-full hover:text-orange-500">
              Sign in as a customer
            </h4>
          </span>
        </div>
        <div className="flex gap-[.6rem] items-center">
          <input
            onClick={() => setView("vendor")}
            className="accent-orange-500 cursor-pointer"
            type="radio"
            name="user_type"
            checked={view === "vendor"}
          />
          <span onClick={() => setView("vendor")}>
            <h4 className="text-[10px] mt-[.4rem] backdrop-blur-xl bg-opacity-30 p-[.4rem] shadow-2xl shadow-slate-100 cursor-pointer rounded-full hover:text-orange-500">
              Sign in as a vendor
            </h4>
          </span>
        </div>
      </div>

      {view === "customer" && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Customer sign-in form */}
          <h1 className="font-Roboto Slab w-[400px] font-bold text-[22px] text-left text-white">
            Welcome Back! <span className="text-[12px]">to your account</span>
          </h1>
          <h4 className="text-[10px] w-[220px] text-left text-slate-300">
            Sign in to fuel your learning journey with delicious meals delivered
            right to your door.
          </h4>

          {/* Name input field */}
          <div className="mt-[1rem]">
            <label className="text-[12px]">Name</label>
            <br />
            <input
              type="text"
              className="w-[100%] bg-transparent outline-0 border-0 border-b"
              placeholder="Enter your Full Name"
              {...register("UserName", { required: true, maxLength: 20 })}
              aria-invalid={errors.UserName ? "true" : "false"}
              autoComplete="name"
            />
            {errors.UserName?.type === "required" && (
              <p className="text-red-500" role="alert">
                Name is required
              </p>
            )}
          </div>

          {/* Email input field */}
          <div className="Input-Data mt-[1rem]">
            <label className="text-[12px]">Email</label>
            <input
              type="text"
              className="MainTime"
              placeholder="Enter your email"
              {...register("Email", { required: true })}
              aria-invalid={errors.Email ? "true" : "false"}
              autoComplete="email"
            />
            {errors.Email?.type === "required" && (
              <p className="text-red-500" role="alert">
                Email is required
              </p>
            )}
          </div>

          {/* Password input field */}
          <div className="Input-Data mt-[1rem]">
            <label className="text-[12px]">Password</label>
            <div className="relative">
              <input
                type={!passwordVisible ? "text" : "password"}
                className="MainTime"
                placeholder="Enter your Password"
                {...register("Password", { required: true })}
                autoComplete="current-password"
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
              {errors.Password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <input className="accent-orange-500" type="checkbox" />
              <h4 className="text-[10px] pt-2">Remember Me</h4>
            </span>
            <h4
              className="underline text-[10px] pt-2 cursor-pointer"
              onClick={() => setView("forgotPassword")}
            >
              Forgot password?
            </h4>
          </div>

          {/* Privacy Policy and Terms of Service agreement */}
          
          <div className="flex justify-center items-center gap-[1rem]">
            <input className="accent-orange-500 ml-[-.8rem]" type="checkbox" />
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
          </div>

          {/* Sign In button */}
          <div>
            <button
              type="submit"
              className="w-full h-[3.2rem] bg-orange-500 mt-[1rem] cursor-pointer"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Signing In...' : 'Sign In'} {/* Display loading text */}
            </button>
          </div>

          {/* Divider for alternative sign-in options */}
          <div className="flex justify-center items-center gap-1 mt-[2rem]">
            <hr className="w-[12rem] bg-slate-800" />
            <h4 className="pt-[.4rem] text-[12px]">or</h4>
            <hr className="w-[12rem] bg-slate-800" />
          </div>

          {/* Sign In with Google button */}
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

          {/* Link to Sign Up page */}
          <p className="text-center text-[12px] mt-[.9rem]">
            Don't have an account?{" "}
            <Link to="/signUp">
              <span className="underline uppercase font-bold cursor-pointer">
                Sign Up
              </span>
            </Link>
          </p>

          {error && (
            <p className="text-red-500 text-center mt-4">Sign-in failed. Please try again.</p>
          )}
        </form>
      )}

      {view === "vendor" && <Vend2 />}
      {view === "forgotPassword" && <Forgotpswd />}
    </div>
  );
};

export default Contact;
