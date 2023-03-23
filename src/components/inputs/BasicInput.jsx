import React, { useContext } from "react";
import { Icon } from "../Icon";
import { themeContext } from "./themeContext";
export const BasicInput = ({
  label,
  placeholder,
  onChange,
  type,
  value,
  className,
  name,
  error,
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
      <label htmlFor={name} className="font-bold text-sm text-black">
        {label}
      </label>
      <div
        className={`flex transition-all flex-row justify-between items-center p-2 gap-2 rounded-lg border-2 border-solid border-[#D5D4DC]   ${
          error ? "border-error bg-red-100" : accent
        } ${freeze && "border-none bg-[#F0F0F4]"}`}
      >
        <input
          autoComplete="off"
          type={type}
          className={`w-full overflow-ellipsis bg-transparent text-black placeholder:font-normal font-medium text-sm border-none active:border-none outline-none focus:outline-none focus:border-none
            ${error && "text-error"}`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => {
            onChange && onChange(e);
          }}
          disabled={disabled || freeze}
          {...props}
        />

        {info && (
          <div
            className="tooltip tooltip-left flex items-center justify-center"
            data-tip={info}
          >
            <Icon
              className="variable-font-medium text-base leading-none"
              icon="info"
            />
          </div>
        )}
      </div>

      {error && (
        <div className="flex ml-1 flex-row justify-start gap-1 items-center text-sm text-error">
          <Icon
            className="text-base variable-font-medium variable-font-fill"
            icon="error"
          />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
