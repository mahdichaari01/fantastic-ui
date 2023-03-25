import React from "react";

import bgVideo from "../../assets/videoBackground.mp4";
import { Hero } from "./Hero";
import { ShowcaseSection } from "../../components/Showcase";
import { PricingSection } from "./Pricing";
import { Page } from "../../components/Page";
export const LandingPage = ({ children }) => {
  return (
    <Page
      headerProps={{
        className:
          "sm:absolute sm:top-0 sm:left-0 sm:w-full sm:h-fit sm:z-[2] ",
        light: true,
      }}
    >
      <video
        className="max-sm:hidden w-full h-fit z-[1]"
        id="video-bg"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={bgVideo} type="video/webm" />
      </video>
      <div className="max-sm:hidden w-full h-12 bg-gradient-to-t from-white to-[#f1f3fa]"></div>
      <Hero />
      <ShowcaseSection />
      <PricingSection />
    </Page>
  );
};
