import React, { useContext } from "react";
import { themeContext } from "./themeContext";
export const Button = ({ label, onClick, disabled, className, href }) => {
  const theme = useContext(themeContext);
  let accent = "";
  switch (theme) {
    case "mauve":
      accent = "btn-primary";
      break;
    case "blue":
      accent = "btn-secondary";
      break;
    case "green":
      accent = "btn-info";
      break;
    case "orange":
      accent = "btn-warning";

      break;
    default:
      accent = "";
      break;
  }
  const props = {
    className: `btn ${accent} ${
      disabled && "btn-disabled bg-neutral-700"
    } ${className}`,
    onClick: onClick || null,
    disabled: disabled,
    href: href || null,
  };
  return href ? <a {...props}>{label}</a> : <button {...props}>{label}</button>;
};
