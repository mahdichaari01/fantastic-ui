import { themeContext } from "./themeContext";
import React, { useContext } from "react";
export const Checkbox = ({
  label,
  onChange,
  checked,
  className,
  size,
  name,
  disabled,
  freeze,
  ...props
}) => {
  const theme = useContext(themeContext);
  let accent = "";
  switch (theme) {
    case "mauve":
      accent = "checkbox-primary";
      break;
    case "blue":
      accent = "checkbox-secondary";
      break;
    case "green":
      accent = "checkbox-info";

      break;
    case "orange":
      accent = "checkbox-warning";
      break;
    default:
      accent = "checkbox-primary";
      break;
  }
  return (
    <div className={`flex flex-row justify-start items-center w-full gap-2 `}>
      <label
        htmlFor={name}
        className={`font-bold text-[.8125rem] text-black order-2 ${className}`}
      >
        {label}
      </label>
      <input
        className={`checkbox ${
          disabled || freeze ? "cursor-not-allowed" : "cursor-pointer"
        } ${accent} ${size === "sm" ? "checkbox-sm" : ""}`}
        type="checkbox"
        checked={checked}
        name={name}
        title={name}
        onChange={(e) => {
          onChange && onChange(e);
        }}
        disabled={disabled}
        readOnly={freeze}
        {...props}
      />
    </div>
  );
};
