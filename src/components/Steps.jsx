import { themeContext } from "./inputs";
import React, { useContext } from "react";
export const Steps = ({ steps, current }) => {
  const theme = useContext(themeContext);
  let accent = "";
  switch (theme) {
    case "mauve":
      accent = "step-primary";
      break;
    case "blue":
      accent = "step-secondary";
      break;
    case "green":
      accent = "step-info";
      break;
    case "orange":
      accent = "step-warning";

      break;
    default:
      accent = "step-primary";
      break;
  }
  return (
    <ul className="steps w-full">
      {steps.map((step, index) => (
        <li key={step} className={`step ${index <= current ? accent : ""}`}>
          {step}
        </li>
      ))}
    </ul>
  );
};
