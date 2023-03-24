import React, { useContext } from "react";
import { Icon } from "../Icon";
import { themeContext } from "./themeContext";
export const Select = ({
  label,
  placeholder,
  onChange,
  children,
  value,
  className,
  name,

  info,
  disabled,
  freeze,
  ...props
}) => {
  const theme = useContext(themeContext);
  let accent = "";
  switch (theme) {
    case "mauve":
      accent = "focus-within:border-mauve";
      break;
    case "blue":
      accent = "focus-within:border-secondary";
      break;
    case "green":
      accent = "focus-within:border-info";
      break;
    case "orange":
      accent = "focus-within:border-warning";
      break;
    default:
      accent = "focus-within:border-mauve";
  }
  return (
    <div
      className={`flex flex-col gap-[.1875rem] justify-start w-full ${
        disabled && "opacity-75"
      }  ${className}`}
    >
      <label
        htmlFor={name}
        className="font-semibold text-[.8125rem] text-black"
      >
        {label}
      </label>
      <div
        className={`flex transition-all flex-row justify-between items-center p-2 gap-2 rounded-lg shadow border border-solid border-[#D5D4DC]   ${accent} ${
          freeze && "border-none bg-[#F0F0F4]"
        }`}
      >
        <select
          name={name}
          className={`w-full overflow-ellipsis bg-transparent text-black placeholder:font-normal font-medium text-sm border-none active:border-none outline-none focus:outline-none focus:border-none`}
          value={value}
          onChange={(e) => {
            onChange && onChange(e);
          }}
          disabled={disabled}
          readOnly={freeze}
          {...props}
        >
          {children}
        </select>

        {info && (
          <div
            className="tooltip tooltip-left flex cursor-none items-center justify-center"
            data-tip={info}
          >
            <Icon
              className="variable-font-medium cursor-default text-base leading-none"
              icon="info"
            />
          </div>
        )}
      </div>
    </div>
  );
};
