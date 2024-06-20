import React from "react";
// import { useState } from "react";

const Button = () => {
  // const [stepper, setStepper] = useState(false);
  // const ToggleNext = () => {
  //   setStepper(!stepper);
  // };
  return (
    <div>
      <button
        // onClick={ToggleNext}
        className="w-full h-[3.2rem] bg-orange-500 mt-[1rem] cursor-pointer"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Button;
