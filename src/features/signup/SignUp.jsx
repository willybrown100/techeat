import React from "react";
import OverLay from "./OverLay/OverLay";

const SignUp = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center relative">
          <div className="w-[1440px]">
            <img
              className="w-[100%] h-[47rem]"
              src="/images/cover001.png"
              placeholder="blur"
              alt="Front-View"
            />
          </div>
        </div>

        <OverLay />
      </div>
    </div>
  );
};

export default SignUp;
