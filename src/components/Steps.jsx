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
    <ul className="steps max-sm:scale-75 w-full max-w-lg">
      {steps &&
        steps.map((step, index) => (
          <li
            key={step + index}
            className={`step ${
              index <= current ? accent : ""
            } text-xs text-neutral-500 `}
          >
            {step}
          </li>
        ))}
    </ul>
  );
};
