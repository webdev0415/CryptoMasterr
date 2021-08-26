import React, { useState } from "react";

const Switch = ({ options = [] }) => {
  const [state, setState] = useState(options[0]);

  return (
    <div className="switch">
      <div className="switch__options">
        {options.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setState(item)}
              className={`switch__option ${
                item.value === state.value && "switch__option__selected"
              }`}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Switch;
