import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function StepperPage() {
  return (
    <div className="w-[3rem] ml-[6.5rem] mt-[2rem]">
      <div>
        <Stepper>
          <Step className="">
            <StepLabel></StepLabel>
          </Step>
          <Step className="">
            <StepLabel></StepLabel>
          </Step>
          <Step className="">
            <StepLabel></StepLabel>
          </Step>
          <Step className="">
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
    </div>
  );
}
