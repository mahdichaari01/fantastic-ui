import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import HeaderDecoration from "../assets/HeaderDecoration.png";

export const Page = ({ noFooter, children, headerProps }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeaderDecoration})`,
      }}
      className={`bg-top min-h-screen w-full flex flex-col justify-between items-center max-md:bg-[auto 10.625rem] bg-[auto 15.0625rem] 2xl:bg-[auto 30vh] bg-repeat-x`}
    >
      <Header {...headerProps} />
      {children}
      <Footer decorationsOnly={noFooter} />
    </div>
  );
};
