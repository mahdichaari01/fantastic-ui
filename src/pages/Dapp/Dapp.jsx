import { Card } from "./Card";
import BG from "../../assets/dappBg.jpg";
import Logo from "../../assets/poweredbyLogo.png";
import { Icon } from "../../components/Icon";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

const SocialIcons = new Map([
  ["facebook", <img src={facebook} alt="fb icon" />],
  ["twitter", <img src={twitter} alt="twtr icon" />],
  ["instagram", <img src={instagram} alt="ig icon" />],
  ["linkedin", <img src={linkedin} alt="lkdin icon" />],
]);
export const Dapp = ({
  imgSrc,
  name,
  description,
  price,
  remaining,
  Vibrant,
  DarkVibrant,
  Function,
}) => {
  const CardProps = { name, imgSrc, description, price, remaining };
  const SocialLinks = new Map([
    ["facebook", "https://www.facebook.com/"],
    ["twitter", "https://twitter.com/"],
    ["instagram", "https://www.instagram.com/"],
    ["linkedin", "https://www.linkedin.com/"],
  ]);

  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundColor: `#000000`,
      }}
      className={`min-h-screen w-full flex flex-col justify-between items-center bg-cover bg-center md:bg-[-25vw] bg-no-repeat gap-16`}
    >
      <header className="w-full z-50 flex flex-row justify-center px-14 pt-6">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="rounded-2xl p-3 cursor-pointer hover:bg-[#0000004d] ">
            <img src={Logo} className="bg-contain h-12" alt="logo" />
          </div>
          <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md border-[#ffffffc7] text-[#ffffffc7]">
            Connect Wallet
          </button>
        </div>
      </header>
      <div className="w-fit md:hidden text-center">
        <div className="w-max font-black text-[2.5rem] leading-tight text-white">
          <span className="saturate-150" style={{ color: DarkVibrant }}>
            {Function}{" "}
          </span>
          Mint is now
        </div>
        <div
          className="text-5xl font-black saturate-150"
          style={{ color: Vibrant }}
        >
          LIVE
        </div>
      </div>
      <div className="w-full flex flex-col max-md:gap-14 md:flex-row justify-evenly items-center ">
        <div className="max-w-sm max-md:w-9/12 ">
          <Card {...CardProps} />
        </div>
        <div className="flex flex-col justify-start items-center gap-10 font-Inter w-min">
          <div className="w-fit max-md:hidden">
            <div className="w-max font-extrabold text-[2.75rem] leading-tight text-white">
              <span className="saturate-150" style={{ color: DarkVibrant }}>
                {Function}{" "}
              </span>
              Mint is now
            </div>
            <div
              className="text-7xl font-black saturate-150"
              style={{ color: Vibrant }}
            >
              LIVE
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-4">
            <div
              className="flex flex-row border border-[#FDFAFA44]   "
              style={{
                backgroundImage:
                  "linear-gradient(150deg, rgba(217, 217, 217, 0.25) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
              }}
            >
              <div className="h-16 w-16 flex justify-center items-center text-white cursor-pointer hover:bg-neutral-600">
                <Icon icon="add" className="variable-font-medium text-4xl" />
              </div>
              <input
                className="bg-[#1B1B1B] w-[3.2ch] text-5xl font-black text-center text-white active:outline-none focus:outline-none"
                placeholder="150"
              />
              <div className="h-16 w-16 flex justify-center items-center text-white cursor-pointer hover:bg-neutral-600">
                <Icon icon="remove" className="variable-font-medium text-4xl" />
              </div>
            </div>
            <p className="text-[#949494] font-bold">{remaining} remaining</p>
          </div>
          <div className="w-full flex flex-row justify-start items-center gap-5">
            <button
              style={{ backgroundColor: Vibrant }}
              className="saturate-150 w-max text-black font-black text-xl leading-none flex justify-center items-center p-4 hover:brightness-75 transition-all"
            >
              <span className="opacity-70">MINT NOW</span>
            </button>
            <div className="w-full font-light text-xs text-white">
              By clicking “Mint” you agree to our{" "}
              <span className="font-semibold">Terms and Services</span> and our{" "}
              <span className="font-semibold">Privacy Policy</span>
            </div>
          </div>
          <ul className="flex flex-row gap-6  items-center">
            {Array.from(SocialLinks).map(([key, val], index) => (
              <li
                className="rounded-full transition-all bg-neutral-100 hover:bg-neutral-300 cursor-pointer p-2"
                key={key}
              >
                <a href={val}>{SocialIcons.get(key)}</a>
              </li>
            ))}
          </ul>
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
