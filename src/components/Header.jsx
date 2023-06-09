import React from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../useMediaQuery";
import { Icon } from "./Icon";
import { Keys } from "./Keys";
import { Logo } from "./Logo";
import { routes } from "../routes";
export default function Header({ light, className }) {
  const md = useMediaQuery("(min-width:768px)");
  const lg = useMediaQuery("(min-width:1024px)");

  if (lg) {
    return (
      <header
        className={`w-full z-50 flex flex-row justify-center px-24 py-11 ${className}`}
      >
        <div className="flex flex-row w-full justify-between">
          <nav className="flex flex-row gap-11 justify-start items-center">
            <Logo color={light ? "text-white" : "text-black"} />
            <ul className="flex flex-row justify-start gap-5 items-center w-fit font-Roboto">
              {routes.map((route) => (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    className={`font-normal text-lg ${
                      light ? "text-[#ffffffa9]" : "text-[#656565]"
                    } p-2 rounded-md hover:bg-base-200 transition-all`}
                    style={({ isActive, isPending }) => {
                      return {
                        fontWeight: isActive ? "bold" : "normal",
                      };
                    }}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Keys light={light} />
        </div>
      </header>
    );
  }
  if (md) {
    return (
      <header className={`navbar px-12 py-6 ${className}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <Icon icon="menu" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {routes.map((route) => (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    className="font-normal text-lg"
                    style={({ isActive, isPending }) => {
                      return {
                        fontWeight: isActive ? "bold" : "normal",
                      };
                    }}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Logo />
        </div>

        <div className="navbar-end">
          <Keys />
        </div>
      </header>
    );
  } else
    return (
      <header className={`navbar px-5 py-5 ${className}`}>
        <div className="navbar-start">
          <Logo />
        </div>

        <div className="navbar-end">
          <Keys />
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <Icon icon="menu" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {routes.map((route) => (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    className="font-normal text-lg"
                    style={({ isActive, isPending }) => {
                      return {
                        fontWeight: isActive ? "bold" : "normal",
                      };
                    }}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    );
}
