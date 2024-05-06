import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import clsx from "clsx";

const FormComponent = () => {
  const [activeForm, setActiveForm] = useState(0);
  return (
    <div className="flex flex-col rounded-[5px] bg-white">
      <div className="flex flex-row w-full justify-between">
        <div
          role="button"
          className={clsx(
            "flex-1 flex justify-center items-start cursor-pointer py-[25px]",
            {
              "border-b-[3px] border-b-[#1E0E62]": activeForm === 0,
            }
          )}
          onClick={() => setActiveForm(0)}
        >
          Sign Up
        </div>
        <div
          role="button"
          className={clsx(
            "flex-1 flex justify-center items-start cursor-pointer py-[25px]",
            {
              "border-b-[3px] border-b-[#1E0E62]": activeForm === 1,
            }
          )}
          onClick={() => setActiveForm(1)}
        >
          Login
        </div>
      </div>
      {activeForm === 0 ? <SignupForm /> : <LoginForm />}
    </div>
  );
};

export default FormComponent;
