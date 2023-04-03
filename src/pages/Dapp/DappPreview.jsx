import { Card } from "./Card";
import BG from "../../assets/dappBg.jpg";
import Logo from "../../assets/poweredbyLogo.png";
import { Icon } from "../../components/Icon";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
const SOCIAL_ICON_CLASSNAME = "h-[1.7vw] w-[1.7vw] md:h-[0.8vw] md:w-[0.8vw] ";
const SocialIcons = new Map([
  [
    "facebook",
    <img className={SOCIAL_ICON_CLASSNAME} src={facebook} alt="fb icon" />,
  ],
  [
    "twitter",
    <img className={SOCIAL_ICON_CLASSNAME} src={twitter} alt="twtr icon" />,
  ],
  [
    "instagram",
    <img className={SOCIAL_ICON_CLASSNAME} src={instagram} alt="ig icon" />,
  ],
  [
    "linkedin",
    <img className={SOCIAL_ICON_CLASSNAME} src={linkedin} alt="lkdin icon" />,
  ],
]);
export const DappPreview = ({
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
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundColor: `#000000`,
      }}
      className={` select-none h-full w-full flex flex-col justify-between items-center bg-cover bg-[400%] bg-no-repeat gap-[1vw]`}
    >
      <header className="w-full z-50 flex flex-row justify-center px-[3vw] md:px-[1vw] pt-[2vw] md:pt-[0.5vw]">
        <div className="flex flex-row w-full justify-between items-center">
          <div
            className={`rounded-2xl p-[1vw] md:p-[0.4vw]  hover:bg-[#0000004d] `}
          >
            <img
              src={Logo}
              className="bg-contain h-[3vw] md:h-[1vw]"
              alt="logo"
            />
          </div>
          <button className="border rounded-[0.7vw] md:rounded-[0.3vw] text-[2vw] md:text-[0.5vw] p-[1vw] md:p-[0.25vw] py-[0.25vw] leading-none border-[#ffffff63] text-[#ffffffc7]">
            Connect Wallet
          </button>
        </div>
      </header>
      <div className="w-full flex gap-[3vw] md:gap-[1vw] flex-row justify-evenly items-center ">
        <div className="w-[23vw] md:w-[10vw]">
          <Card xs {...CardProps} />
        </div>
        <div className="flex flex-col text-left justify-start items-center gap-[2vw] md:gap-[0.4vw] font-Inter w-fit max-w-[24vw] md:max-w-[15vw]">
          <div className="w-full">
            <div className="w-max font-extrabold text-[3vw] md:text-[1.3vw] leading-tight text-white">
              <span className="saturate-150" style={{ color: DarkVibrant }}>
                {Function}{" "}
              </span>
              Mint is now
            </div>
            <div
              className="text-[3.3vw] md:text-[1.4vw] leading-none font-black saturate-150"
              style={{ color: Vibrant }}
            >
              LIVE
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-[0.5vw]">
            <div
              className="flex flex-row border border-[#FDFAFA44]   "
              style={{
                backgroundImage:
                  "linear-gradient(150deg, rgba(217, 217, 217, 0.25) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
              }}
            >
              <div className="h-[4.5vw] w-[4.5vw] md:h-[1.5vw] md:w-[1.5vw] flex justify-center items-center text-white  hover:bg-neutral-600">
                <Icon
                  icon="add"
                  className="variable-font-medium text-[3vw] md:text-[1vw] leading-none"
                />
              </div>
              <input
                className="bg-[#1B1B1B] w-[3.2ch] text-[3vw] md:text-[1vw] leading-none font-black text-center text-white active:outline-none focus:outline-none"
                placeholder="150"
              />
              <div className="h-[4.5vw] w-[4.5vw] md:h-[1.5vw] md:w-[1.5vw] flex justify-center items-center text-white  hover:bg-neutral-600">
                <Icon
                  icon="remove"
                  className="variable-font-medium text-[3vw] md:text-[1vw] leading-none"
                />
              </div>
            </div>
            <p className="text-[#949494] text-[1vw] md:text-[0.5vw] font-bold leading-tight">
              {remaining} remaining
            </p>
          </div>
          <div className="w-fit flex flex-row justify-start items-center gap-[1.1vw]">
            <button
              style={{ backgroundColor: Vibrant }}
              className="saturate-150 w-max text-black font-black text-[2vw] md:text-[0.8vw] leading-none flex justify-center items-center p-[0.5vw] md:p-[0.25vw] hover:brightness-75 transition-all"
            >
              <span className="opacity-70 w-max inline-block">MINT NOW</span>
            </button>
            <div className="w-full font-light text-[0.8vw] md:text-[0.4vw] text-white leading-none">
              By clicking “Mint” you agree to our{" "}
              <span className="font-semibold">Terms and Services</span> and our{" "}
              <span className="font-semibold">Privacy Policy</span>
            </div>
          </div>
          <ul className="flex flex-row gap-[1vw] mt-[0.5vw] items-center">
            {Array.from(SocialIcons).map(([key, val], index) => (
              <li
                className="rounded-full  transition-all bg-neutral-100 hover:bg-neutral-300 p-[0.3vw] md:p-[0.17vw]"
                key={key}
              >
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pb-[0.4vw]">
        <p className="text-center text-[0.3vw] leading-none text-white opacity-25">
          this app was generated by{" "}
          <span className="font-black font-WorkSans">*fantastic</span>, learn
          more here
        </p>
      </div>
    </div>
  );
};
