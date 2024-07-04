import React from "react";
import OverLay3 from "./OverLay3";

const Policy = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[8rem]">
        <img
          className="w-[100%] h-[22rem]"
          src="/images/Privacy Policies.png"
          placeholder="blur"
          alt="Policy"
        />
      </div>
      
      <OverLay3 />
    </div>
  );
};

export default Policy;
