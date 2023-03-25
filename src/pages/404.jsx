import { Card } from "./Dapp/Card";
import BG from "../assets/dappBg.jpg";
import ArtWork from "../assets/404.gif";

import Header from "../components/Header";

export const Unfound = () => {
  const imgSrc = ArtWork;
  const name = "404 Not Found";
  const description = "The page you are looking for does not exist";
  const price = "NaN";
  const remaining = "NaN";
  const DarkVibrant = "#cda6e1";
  const Vibrant = "#93dbac";
  const CardProps = { name, imgSrc, description, price, remaining };
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundColor: `#000000`,
      }}
      className={`min-h-screen w-full flex flex-col justify-between items-center bg-cover bg-center md:bg-[-25vw] bg-no-repeat gap-16`}
    >
      <Header light className="max-lg:invert" />
      <div className="w-fit md:hidden text-center font-Inter">
        <div className="w-max font-black text-[2.5rem] leading-tight text-white">
          This
          <span className="saturate-150" style={{ color: DarkVibrant }}>
            {" "}
            Dapp{" "}
          </span>
          was not
        </div>
        <div
          className="text-5xl font-black saturate-150"
          style={{ color: Vibrant }}
        >
          Found
        </div>
      </div>
      <div className="w-full flex flex-col max-md:gap-14 md:flex-row justify-evenly items-center ">
        <div className="max-w-sm max-md:w-9/12 ">
          <Card {...CardProps} />
        </div>
        <div className="flex flex-col justify-start items-center gap-10 font-Inter w-min">
          <div className="w-fit max-md:hidden">
            <div className="w-max font-extrabold text-[2.75rem] leading-tight text-white">
              This
              <span className="saturate-150" style={{ color: DarkVibrant }}>
                {" "}
                Dapp{" "}
              </span>
              was
            </div>
            <div
              className="text-7xl font-black saturate-150 w-max"
              style={{ color: Vibrant }}
            >
              NOT FOUND
            </div>
          </div>

          <div className="w-full flex flex-row justify-start items-center gap-5">
            <button
              style={{ backgroundColor: Vibrant }}
              onClick={() => {
                window.history.back();
              }}
              className="saturate-150 w-max text-black font-black text-xl leading-none flex justify-center items-center p-4 hover:brightness-75 transition-all"
            >
              <span className="opacity-70 inline-block w-max">GO BACK</span>
            </button>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <p className="text-center text-white opacity-25">
          this app was generated by{" "}
          <span className="font-black font-WorkSans">*fantastic</span>, learn
          more here
        </p>
      </div>
    </div>
  );
};