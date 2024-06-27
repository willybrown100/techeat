import React from "react";
import Contact from "./Signin-com/Contact";

const OverLay2 = () => {
  return (
    <div>
      <div className="">
        <div className="absolute inset-0 top-[-37.5rem] bg-slate-900 xl:h-[84rem] bg-opacity-70 backdrop-blur-medium flex flex-row-reverse justify-center items-center h-screen">
          <div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLay2;
