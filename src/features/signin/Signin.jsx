import React from "react";
import OverLay2 from "./OverLay2";
import Logo2 from "./Signin-com/Logo2";

const Signin = () => {
  return (
    <div className="relative">
      <div className="w-full">
        <img
          className="w-[100%] h-[47rem]"
          src="/images/cover001.png"
          placeholder="blur"
          alt="bodyHero"
        />
      </div>
      <div>
        <OverLay2/>
      </div>
      <Logo2/>
    </div>
  );
};

export default Signin;
