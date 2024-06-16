import React from "react";
import Logo from "../../../Logo/Logo";
import Contents from "../../../Signs-Customer/Contents";

const OverLay = () => {
  return (
    <div className="">
      <div className="absolute inset-0 top-[-37.5rem] bg-slate-900 xl:h-[84rem] bg-opacity-70 backdrop-blur-medium flex justify-center items-center h-screen">
     <Contents/>
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default OverLay;
