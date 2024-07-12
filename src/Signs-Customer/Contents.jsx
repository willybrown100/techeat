import React, { useState } from "react";
import "./Content.scss";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useFetch from "./../features/signup/useFetch";
import StepperPage from "../components/Stepper/StepperPage";
import axios from "axios";

const Contents = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [stepper, setStepper] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { loading, error, fetchData } = useFetch();

  const handleToggle = () => setToggle(!toggle);
  const ToggleOpen = () => setOpen(!open);
  const StepperToggle = () => setStepper(!stepper);

  const onSubmit = async (data) => {
    // const res = await axios.post(
    //   `https://techeat-server-1.onrender.com/api/auth/register`,
    //   {
    //     email: data.Email,
    //     password: data.Password,
    //     user_type: data.user_type,
    //   }
    // );
    try {
      const response = await fetchData(
        "https://techeat-server-1.onrender.com/api/auth/register",
        {
          method: "POST",
          body: JSON.stringify({
            email: data.Email,
            password: data.Password,
            name: data.UserName,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response from fetchData:", response);
      if (response) {
        if (data.user_type === "Vendor") {
          setStepper(true);
        } else {
          navigate("/signin");
        }
      }
    } catch (error) {
      console.error("Sign-up error:", error);
    }
    reset();
    console.log(data)
  };

  return (
    <div className="absolute bg-opacity-10 bg-white backdrop-blur-xl bg-transparent xl:w-[550px] xl:h-[47rem] xl:top-[37.2rem] top-[48rem] xl:right-0 xl:p-[5rem] p-4 rounded w-[22rem] ml-[-2rem]">
      <div className="flex justify-between items-center mt-[-2rem]">
        <RadioInput
          handleToggle={handleToggle}
          value="Customer"
          label="Sign up as a customer"
        />
        <RadioInput
          handleToggle={handleToggle}
          value="Vendor"
          label="Sign up as a vendor"
          onClick={StepperToggle}
        />
      </div>

      {toggle ? (
        <SignUpForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          open={open}
          ToggleOpen={ToggleOpen}
          loading={loading}
        />
      ) : (
        <StepperPage />
      )}
    </div>
  );
};

const RadioInput = ({ handleToggle, value, label, onClick }) => (
  <div className="flex gap-[.6rem] items-center">
    <input
      onClick={handleToggle}
      className="accent-orange-500"
      type="radio"
      name="user_type"
      value={value}
    />
    <h4
      onClick={onClick}
      className="text-[10px] mt-[.4rem] backdrop-blur-xl bg-opacity-30 p-[.4rem] shadow-2xl shadow-slate-100 cursor-pointer rounded-full hover:text-orange-500"
    >
      {label}
    </h4>
  </div>
);

const SignUpForm = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  open,
  ToggleOpen,
  loading,
}) => (
  <form onSubmit={handleSubmit(onSubmit)} className="">
    <h1 className="font-Roboto Slab w-[400px] font-bold text-[22px] text-left text-white mt-[1rem]">
      Welcome to TECH EATS
    </h1>
    <h4 className="text-[10px] w-[200px] text-left text-slate-400 mt-[1rem]">
      Fuel your mind with tech skills and your body with gourmet meals
    </h4>

    <InputField
      label="Name"
      type="text"
      placeholder="Enter your Full Name"
      register={register("UserName", {
        required: true,
        minLength: 3,
        maxLength: 20,
        pattern: /^[a-zA-Z0-9_]+$/,
      })}
      error={errors.UserName}
      errorMessage={{
        required: "Name is required",
        minLength: "Name must be at least 3 characters long",
        maxLength: "Name cannot exceed 20 characters",
        pattern:
          "Name can only contain alphanumeric characters and underscores",
      }}
    />

    <InputField
      label="E-mail"
      type="email"
      placeholder="Enter your email"
      register={register("Email", {
        required: true,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      })}
      error={errors.Email}
      errorMessage={{
        required: "Email is required",
        pattern: "Enter a valid email address",
      }}
    />

    <PasswordField
      label="Password"
      placeholder="Enter your Password"
      register={register("Password", {
        required: true,
        minLength: 8,
        pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])/,
      })}
      error={errors.Password}
      errorMessage="Password is required and must be at least 8 characters long, containing both letters and numbers"
      open={open}
      ToggleOpen={ToggleOpen}
    />

    <div className="flex justify-center items-center gap-[1rem]">
      <input className="accent-orange-500" type="checkbox" />
      <p className="text-[10px] mt-[1rem]">
        I have read and understand the{" "}
        <Link to="/Policy" className="font-bold text-orange-500 cursor-pointer">
          Privacy Policy
        </Link>{" "}
        and agree to the{" "}
        <Link
          to="/TermsOfService"
          className="font-bold text-orange-500 cursor-pointer"
        >
          Terms of Service
        </Link>
      </p>
    </div>

    <div>
      <button
        className="w-full h-[3.2rem] bg-orange-500 mt-[1rem] cursor-pointer"
        type="submit"
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </div>

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
);

const InputField = ({
  label,
  type,
  placeholder,
  register,
  error,
  errorMessage,
}) => (
  <div className="mt-[1rem]">
    <label className="text-[12px]">{label}</label>
    <br />
    <input
      type={type}
      className="w-[100%] bg-transparent outline-0 border-0 border-b"
      placeholder={placeholder}
      {...register}
      aria-invalid={error ? "true" : "false"}
      autoComplete={type}
    />
    {error && (
      <p className="text-white" role="alert">
        {errorMessage[error.type]}
      </p>
    )}
  </div>
);

const PasswordField = ({
  label,
  placeholder,
  register,
  error,
  errorMessage,
  open,
  ToggleOpen,
}) => (
  <div className="Input-Data mt-[1rem]">
    <label className="text-[12px]">{label}</label>
    <div className="relative">
      <input
        type={!open ? "password" : "text"}
        className="MainTime"
        placeholder={placeholder}
        {...register}
        autoComplete="current-password"
      />
      <span className="absolute right-3 cursor-pointer">
        {open ? (
          <IoIosEyeOff
            className="cursor-pointer w-[2rem] h-[2rem] pb-[.8rem]"
            onClick={ToggleOpen}
          />
        ) : (
          <IoIosEye
            className="cursor-pointer w-[2rem] h-[2rem] pb-[.8rem]"
            onClick={ToggleOpen}
          />
        )}
      </span>
      {error && <span className="text-white">{errorMessage}</span>}
    </div>
  </div>
);

export default Contents;
