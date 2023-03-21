import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import HeaderBackground from "../assets/HeaderBackground.png";

export const Page = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeaderBackground})`,
        minHeight: "100vh",
      }}
      className="bg-top max-md:bg-[auto 10.625rem] bg-[auto 15.0625rem] bg-no-repeat"
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
