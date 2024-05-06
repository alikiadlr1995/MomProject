import React, { useState } from "react";
import SignupForm from "./SignupForm";
import clsx from "clsx";
import Input from "@/components/Common/Input";
import SelectComponent from "@/components/Common/Select";
import { Checkbox } from "@mui/material";

const FormComponent = () => {
  return (
    <div className="flex flex-col rounded-[5px] bg-white pt-[70px] pb-[80px] px-[10%] gap-[35px]">
      <div className="flex flex-row w-full gap-[30px]">
        <Input label="YOUR NAME" placeholder="First name" />
        {/* <Input label="BUDGET" placeholder="$500" /> */}
        <SelectComponent
          items={[
            { label: "500$", value: "500" },
            { label: "400$", value: "400" },
            { label: "300$", value: "300" },
          ]}
          onChange={(value) => console.log(value)}
          value="500"
        />
      </div>
      <Input label="INPUT FIELD" placeholder="name@mail.com" />
      <div className="flex flex-col gap-1.5">
        <label>YOUR MESSAGE</label>
        <textarea
          className="w-full rounded-[10px] min-h-[150px] border-[2px] border-[#EBEAED] p-6"
          placeholder="Message"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <Checkbox
            defaultChecked
            sx={{
              color: "#25DAC5",
              "&.Mui-checked": {
                color: "#25DAC5",
              },
            }}
          />
          <span className="text-base text-[#151439]/40">Send me a copy</span>
        </div>

        <button className="px-[35px] py-[17px] rounded-full bg-[#25DAC5] text-white text-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
