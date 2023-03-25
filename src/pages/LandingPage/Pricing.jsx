import Bg from "../../assets/PricingBg.jpg";
import Key from "../../assets/keyArtwork.png";
import { Button } from "../../components/inputs";

export const PricingSection = () => {
  return (
    <div
      className="w-full flex flex-col items-center gap-4  py-20 bg-bottom bg-no-repeat bg-contain max-md:bg-[length:0px_0px]"
      style={{
        backgroundImage: `url(${Bg}) `,
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/}
      <a id={"pricing"}></a>
      <div>
        <div className="flex flex-col items-center gap-4 px-5 text-center">
          <img src={Key} alt="" />
          <div className="text-black font-black font-WorkSans text-5xl">
            Seamless Payment with <span className="text-[#FFC708]">keys</span>
          </div>
          <p className="text-lg font-Inter text-center w-fit max-w-2xl leading-snug">
            Fantastic connects to your wallet and allows you to buy keys in just
            a few seconds with the power of blockchain
          </p>
          <Button
            className="btn-outline btn-md"
            label="learn more"
            href="/Docs"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[-1.25rem] py-20">
        <PricingOption
          name="Nifty Maker"
          description="Just enough keys to start your NFT journey"
          price={0.015}
          tickets={5}
        />
        <PricingOption
          name="NFT Expert"
          description="You just can't get enough can't you"
          price={0.03}
          tickets={20}
          gold
          className="scale-110 z-20"
        />
        <PricingOption
          name="Digital Artisan"
          description="Deploy multiple items and update at any moment"
          price={0.025}
          tickets={10}
        />
      </div>
    </div>
  );
};

const PricingOption = ({
  name,
  price,
  tickets,
  gold,
  description,
  className,
}) => (
  <div
    className={`bg-[#ffffff] bg-opacity-50 shadow-lg overflow-hidden rounded-3xl backdrop-blur-md px-[1.9375rem] py-8 flex flex-col items-start border border-[#aeaeae79] gap-11 font-Inter z-10 ${className}`}
  >
    <div className="flex flex-col gap-5 justify-start items-start w-min">
      <div className="w-full flex flex-row gap-2 justify-between items-end text-[#676767]">
        <div
          className={`text-2xl font-extrabold ${gold ? "text-[#FFC708]" : ""}`}
        >
          {price}
          <sup>ETH</sup>
        </div>
        <div className="text-base font-Inter font-medium w-max">
          /{tickets} tickets
        </div>
      </div>
      <div className="flex flex-col gap-[.375rem]">
        <div
          className={`text-[1.75rem] ${
            gold ? "text-[#FFC708] font-bold" : "text-[#676767] font-semibold"
          }`}
        >
          {name}
        </div>
        <p className="text-[#848199] text-[.9375rem] font-medium w-fit">
          {description}
        </p>
      </div>
    </div>
    <button
      className={`w-full rounded-full text-white opacity-50 py-[.9375rem] text-[.9375rem] leading-none ${
        gold ? "bg-[#FFC708]" : "bg-[#676767]"
      }`}
    >
      Get Now
    </button>
  </div>
);
