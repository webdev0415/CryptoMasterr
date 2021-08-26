import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Input = ({ type = "text", className = "", placeholder, search }) => {
  return (
    <div className={`input ${className}`}>
      <input type={type} placeholder={placeholder} />
      {search && <RiSearchLine />}
    </div>
  );
};

export default Input;
