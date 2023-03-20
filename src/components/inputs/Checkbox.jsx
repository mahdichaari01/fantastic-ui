import { themeContext } from "./themeContext";
import React, { useContext } from "react";
export const Checkbox = ({
  label,
  onChange,
  checked,
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
      accent = "checked:bg-mauve";
      break;
  }
  return (
    <div className={`flex flex-row justify-start items-center w-full gap-3`}>
      <input
        className={`checkbox ${
          disabled || freeze ? "cursor-not-allowed" : "cursor-pointer"
        } ${accent}`}
        type="checkbox"
        checked={checked}
        name={name}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled || freeze}
        {...props}
      />
      <label htmlFor={name} className="font-bold text-base text-black">
        {label}
      </label>
    </div>
  );
};
