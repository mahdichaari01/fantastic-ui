import { themeContext } from "./inputs";
import React, { useContext } from "react";
export const Steps = ({ steps, current, ...props }) => {
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
    <ul className={`steps w-full max-w-lg ${props.className}`}>
      {steps &&
        steps.map((step, index) => (
          <li
            key={step + index}
            className={`step max-sm:text-[0.6rem] ${
              index <= current ? accent + " font-medium" : ""
            } text-xs text-neutral-500 `}
            data-content={index === current ? "●" : index < current ? "✔" : ""}
          >
            {step}
          </li>
        ))}
    </ul>
  );
};
