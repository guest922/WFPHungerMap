import React, { useState, useEffect } from "react";
import { Icon } from "@wfp/ui";
import { ButtonValueProps, WFPSwitcherProps } from "../Types/WFPSwitcherTypes";

const WFPSwitcher = ({ buttons, defaultValue, setValue }: WFPSwitcherProps) => {
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  const handleButtonClick = (value: string) => {
    setSelected(value);
    setValue(value as ButtonValueProps);
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "center",
        left: "50%",
        transform: "translate(-50%, 10%)",
      }}
    >
      {buttons.map((button, index) => {
        const isSelected = button.value === selected;
        return (
          <Icon
            key={`${button.value}${index}`}
            className={`wfp--btn ${
              isSelected ? `wfp--btn--primary` : `wfp--btn--secondary`
            }`}
            onClick={() => handleButtonClick(button.value)}
            icon={button.icon}
            description={button.value}
            style={{
              height: isSelected ? "70px" : "50px",
              width: isSelected ? "70px" : "50px",
              fill: "white",
              marginLeft: "10px",
              marginRight: "10px",
              backgroundColor: "#007dbc",
              transition: "all 0.3s ease", // Add transition for smooth animation
            }}
          ></Icon>
        );
      })}
    </div>
  );
};

export default WFPSwitcher;
