import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import FooterDecoration from "../assets/FooterDecoration.png";
import { routes } from "../routes";
export const Footer = ({ decorationsOnly }) => {
  const SocialLinks = new Map([
    ["facebook", "https://www.facebook.com/"],
    ["twitter", "https://twitter.com/"],
    ["instagram", "https://www.instagram.com/"],
    ["linkedin", "https://www.linkedin.com/"],
  ]);
  const SocialIcons = new Map([
    ["facebook", <img src={facebook} alt="fb icon" />],
    ["twitter", <img src={twitter} alt="twtr icon" />],
    ["instagram", <img src={instagram} alt="ig icon" />],
    ["linkedin", <img src={linkedin} alt="lkdin icon" />],
  ]);
  return (
    <footer className=" mt-7 flex flex-col items-center w-full gap-4">
      {decorationsOnly === true ? null : (
        <>
          {" "}
          <section className="flex flex-row w-fit flex-wrap items-center h-fit">
            <Logo size="sm" color="text-mauve" />
            <div className="divider divider-horizontal"></div>
            <ul className="flex flex-row gap-4 items-center">
              {Array.from(SocialLinks).map(([key, val], index) => (
                <li
                  className="rounded-full transition-all hover:bg-neutral-300 cursor-pointer p-2"
                  key={key}
                >
                  <a href={val}>{SocialIcons.get(key)}</a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <ul className="flex flex-row justify-start gap-3 sm:gap-8 items-center w-fit font-Roboto">
              {routes.map((route, index) => (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    className="font-normal text-xs sm:text-sm md:text-sm transition-all cursor-pointer"
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
          </section>
          <section className="w-full flex flex-col items-center">
            <p className="text-center text-sm sm:w-3/5">
              We provide enable non tech savy people to sell their art on the
              block chain with ease. We provide enable non tech savy people to
              sell their art on the block chain with ease.{" "}
            </p>
            <p className="opacity-25 text-center text-sm">
              Copyright ©2023 made with ❤️ at{" "}
              <span className="font-black font-WorkSans">*fantastic</span>
            </p>
          </section>
        </>
      )}
      <section
        className="w-full"
        style={{
          height: "7.5rem",
          backgroundImage: `url(${FooterDecoration})`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
          backgroundSize: "100% 100%",
        }}
      ></section>
    </footer>
  );
};
