import { themeContext } from "./inputs";
import React, { useContext } from "react";
import useMediaQuery from "../useMediaQuery";
import { Icon } from "./Icon";
export const Steps = ({ steps, current, ...props }) => {
  const theme = useContext(themeContext);
  const match = useMediaQuery("(max-width: 440px)");
  let accent = "";
  let otherAccent = "";
  switch (theme) {
    case "mauve":
      accent = "step-primary";
      otherAccent = {
        primary: "text-primary",
        content: "text-primary-content",
      };

      break;
    case "blue":
      accent = "step-secondary";
      otherAccent = {
        primary: "text-secondary",
        content: "text-secondary-content",
      };
      break;
    case "green":
      accent = "step-info";
      otherAccent = { primary: "text-info", content: "text-info-content" };
      break;
    case "orange":
      accent = "step-warning";
      otherAccent = {
        primary: "text-warning",
        content: "text-warning-content",
      };

      break;
    default:
      accent = "step-primary";
      otherAccent = {
        primary: "text-primary",
        content: "text-primary-content",
      };
      break;
  }
  if (match)
    return (
      <ul className={`px-2 flex flex-col gap-0.5`}>
        {steps &&
          steps.map((step, index) => (
            <li
              className={`grid grid-cols-[1.5rem,1fr] items-center w-full gap-3 font-light  ${
                index === current
                  ? otherAccent.primary + " font-medium"
                  : index < current
                  ? "text-lime-700"
                  : otherAccent.content
              }`}
              key={step + index}
            >
              {index === current ? (
                <Icon icon="pending" className="justify-self-center" />
              ) : index < current ? (
                <Icon
                  icon="check_circle"
                  className="justify-self-center variable-font-extralight"
                />
              ) : (
                <Icon
                  icon="fiber_manual_record"
                  className="variable-font-semibold text-lg justify-self-center"
                />
              )}
              <span className="grid grid-cols-[.625rem,1fr] gap-1 tracking-wider text-sm">
                <span className="place-self-end">{index + 1}.</span>
                <span>{step}</span>
              </span>
            </li>
          ))}
      </ul>
    );
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
