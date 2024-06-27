import React from "react";
import OverLay2 from "./OverLay2";
import Logo2 from "./Signin-com/Logo2";

const Signin = () => {
  return (
    <div className="relative">
      <div className="w-full">
        <img
          className="xl:w-[100%] xl:h-[47rem] hidden"
          src="/images/cover001.png"
          placeholder="blur"
          alt="bodyHero"
        />
        <img
          className=" xl:hidden block"
          src="/images/Mobile.png"
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
