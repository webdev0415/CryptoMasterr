import React, { useState, FC } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ReactComponent as OK } from "../assets/ok.svg";

const DATA = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Few",
    value: "few",
  },
  {
    label: "New Data",
    value: "new-data",
  },
  {
    label: "Old Data Data Data Data",
    value: "old-data",
  },
];

interface DropdownProps {
  label: string,
  className?: string,
  onChange?: () => void,
  options?: any
}
const Dropdown: FC<DropdownProps> = ({ label, className = "", onChange, options }: DropdownProps) => {
  const CURRENT_DATA = options ?? DATA;

  const [open, setOpen] = useState(false);
  const [val, setVal] = useState(CURRENT_DATA[0]);

  const handleChange = (val: any): void => {
    console.log("val", typeof val)
    setOpen(false);
    setVal(val);
    if (onChange) onChange();
  };

  return (
    <div className={`dropdown ${className}`}>
      <span className="dropdown__label">{label}</span>
      <div
        className={`dropdown__head ${open && "active"}`}
        onClick={() => setOpen(true)}
      >
        <span>{val.label}</span>
        <RiArrowDropDownLine />
      </div>

      {open && (
        <div className="dropdown__data">
          {CURRENT_DATA.map((d: any, index: number) => (
            <div
              key={index}
              onClick={() => handleChange(d)}
              className="dropdown__data__item"
            >
              {d.label}
              {d.value === val.value && <OK />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
