import React, { useContext } from "react";
import { Icon } from "../Icon";
import { themeContext } from "./themeContext";
export const TextArea = ({
  label,
  placeholder,
  onChange,
  type,
  value,
  name,
  error,
  info,
  resize,
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
      className={`flex flex-col gap-[.1875rem] justify-start w-full h-full ${
        disabled && "opacity-75"
      }`}
    >
      <label
        htmlFor={name}
        className="font-semibold text-[.8125rem] text-black"
      >
        {label}
      </label>
      <div
        className={`flex transition-all shadow flex-row flex-grow flex-shrink overflow-hidden justify-between items-start p-2 gap-2 rounded-lg border border-solid border-[#D5D4DC] ${
          error ? "border-error bg-red-100" : accent
        } ${freeze && "border-none bg-[#F0F0F4]"}`}
      >
        <textarea
          className={`w-full h-full text-black overflow-ellipsis bg-transparent placeholder:font-normal font-medium text-sm border-none active:border-none outline-none focus:outline-none focus:border-none
            ${error && "text-error"} ${!resize && "resize-none"}`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => {
            onChange && onChange(e);
          }}
          disabled={disabled}
          readOnly={freeze}
          {...props}
        />

        {info && (
          <div
            className="tooltip tooltip-left flex items-center justify-center"
            data-tip={info}
          >
            <Icon className="variable-font-medium" icon="info" />
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
