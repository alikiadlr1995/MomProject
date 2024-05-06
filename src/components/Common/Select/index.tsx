import { InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

import React from "react";

interface SelectProps {
  value: string;
  items: { label: string; value: string }[];
  onChange: (value: string) => void;
}
const SelectComponent = ({ value, items, onChange }: SelectProps) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      <label className="text-[#1E0E62] text-sm">BUDGET</label>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full h-[50px] border-[2px] border-[#EBEAED] px-6"
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectComponent;
