import { useEffect, useRef, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../useMediaQuery";
import { Icon } from "./Icon";
import deployArt from "../assets/deployArt.png";
import createArt from "../assets/createArt.png";
import updateArt from "../assets/updateArt.png";
import visitArt from "../assets/visitArt.png";

const IMG_CLASSNAME =
  "object-contain h-full transition-all duration-[33ms] w-auto";
const FloatingImg = ({ ...props }) => {
  const ref = useRef();
  const rand = useMemo(() => Math.random() + 1, []);
  const update = useCallback((rand) => {
    const t = (performance.now() * rand) / 7000;
    return { x: -10 * Math.cos(2.5 * t), y: 12 * Math.sin(4 * t) };
  }, []);
  const onFrame = useCallback(() => {
    const newMotion = update(rand);
    if (!ref.current) return;
    ref.current.style.transform = `translate(${newMotion.x}px,  ${newMotion.y}px)`;
    requestAnimationFrame(onFrame);
  }, [rand, update]);
  useEffect(() => {
    requestAnimationFrame(onFrame);
  }, [onFrame]);
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img ref={ref} {...props} />;
};
const showcaseList = new Map([
  [
    "deploy",
    {
      title: "Deploy on the blockchain",
      description:
        "Deploy NFTs on the Ethereum blockchain with just a few clicks! Customize your contract to include free minting, whitelisting, and more. Get started today and create your own NFTs quickly and easily.",
      link: "/deploy",
      docs: "/docs/deploy",
      Art: (
        <FloatingImg
          src={deployArt}
          className={IMG_CLASSNAME}
          alt="deploy artwork"
        />
      ),
      background:
        "radial-gradient(133.77% 230.64% at 94.37% 90.43%, #FFE5F9 0%, #ACB1E3 100%)",
    },
  ],
  [
    "create",
    {
      title: "Create a new Dapp",
      description:
        "Create lets you make a site to mint NFTs from your contract. It's ideal for anyone who wants to share their NFTs with more people, for fun or profit. You can brand your site and manage your NFTs and transactions easily. Start now and unleash your NFT power!",
      link: "/create",
      docs: "/docs/create",
      Art: (
        <FloatingImg
          src={createArt}
          className={IMG_CLASSNAME}
          alt="create artwork"
        />
      ),
      background:
        "radial-gradient(107.09% 139.84% at 0% 93.29%, #E9FBFA 0.93%, #C4D8EC 46.32%)",
    },
  ],
  [
    "update",
    {
      title: "Update your Dapp",
      description:
        "You can update your minting site with new NFTs and more using our Update functionality. It lets you change your content and NFTs easily and quickly. Our platform is reliable and user-friendly, so you can refresh your minting site in minutes.",
      link: "/update",
      docs: "/docs/update",
      Art: (
        <FloatingImg
          src={updateArt}
          className={IMG_CLASSNAME}
          alt="update artwork"
        />
      ),
      background:
        "radial-gradient(126.66% 218.36% at 97.02% 8.26%, #FFE4DC 0%, #FF9272 100%)",
    },
  ],
  [
    "visit",
    {
      title: (
        <span>
          Visit your{" "}
          <span className="font-black font-WorkSans">*fantastic</span> Dapp
        </span>
      ),
      description:
        "Visit your minting site and show off your NFTs to the world! Our platform lets you easily share your creations and connect with your fans. Whether you’re selling or just sharing, you can trust our user-friendly and reliable service. Don’t wait, visit your site now and discover how fun it can be to share your NFTs!",
      docs: "/docs/visit",
      Art: (
        <FloatingImg
          src={visitArt}
          className={IMG_CLASSNAME}
          alt="visit artwork"
        />
      ),
      background:
        "radial-gradient(129.47% 161.13% at 6.13% 8.7%, #E7F5F5 0.93%, #86D0CC 54.36%)",
    },
  ],
]);

export const ShowcaseSection = ({ grid }) => {
  const sm = useMediaQuery("(min-width:640px)");
  const md = useMediaQuery("(min-width:768px)");
  if (!!grid || !sm) {
    return (
      <div className="grid grid-cols-[clamp(0px,80%,25rem)] md:grid-cols-[repeat(2,clamp(0px,40%,48rem))] lg:grid-cols-[repeat(2,clamp(0px,35%,48rem))] gap-4 w-full justify-center">
        {Array.from(showcaseList).map(([key, value], index) => (
          <ShowcaseCard invert={!md || index % 4 > 1} key={key} {...value} />
        ))}
      </div>
    );
  }

  return (
    <div className="">
      {Array.from(showcaseList).map(([key, value], index) => (
        <ShowcaseWide invert={index % 2 === 0} key={key} {...value} />
      ))}
    </div>
  );
};
const ShowcaseCard = ({
  background,
  className,
  invert,
  title,
  description,
  link,
  Art,
}) => {
  const ArtBox = useCallback(() => {
    return (
      <div
        style={{ background: background }}
        className={`h-44 md:h-60 flex flex-row p-7 justify-center items-center`}
      >
        {Art}
      </div>
    );
  }, [background, Art]);
  return (
    <Link
      to={link}
      className="w-full font-Roboto flex flex-col justify-between rounded-[1.25rem] shadow-lg overflow-hidden hover:scale-[101%] transition-all"
    >
      {!!invert && <ArtBox />}
      <div className="flex flex-col px-[1.125rem] py-3 bg-white">
        <div className="hover:underline transition-all font-bold text-xl">
          {title}
        </div>
        <p className="font-light text-xs line-clamp-3">{description}</p>
      </div>
      {!invert && <ArtBox />}
    </Link>
  );
};
const ShowcaseWide = ({
  background,
  className,
  invert,
  title,
  description,
  docs,
  link,
  Art,
}) => {
  return (
    <div
      style={{ background: background }}
      className={`w-full flex flex-row px-16 py-20 justify-between items-center ${className}`}
    >
      {!invert && (
        <div className="w-fit max-w-[50%] h-3/4 flex flex-row justify-end items-center">
          {Art}
        </div>
      )}
      <div className="font-Roboto w-2/5 text-white flex flex-col gap-2">
        <div className="font-bold text-4xl">{title}</div>
        <div className="tooltip" data-tip={description}>
          <p className="font-light text-left text-xl line-clamp-6">
            {description}
          </p>
        </div>
        <div className="flex flex-row items-center justify-start gap-4">
          {link && (
            <Link
              to={link}
              className="bg-white transition-all hover:brightness-90 w-fit font-medium text-xl rounded-full flex flex-row items-center px-[.625rem] py-0.5 text-[#A595E0]"
            >
              <span>Try Now</span>
              <Icon
                icon="north_east"
                className="variable-font-medium leading-none"
              />
            </Link>
          )}
          {docs && (
            <Link
              to={docs}
              className="bg-white w-fit transition-all hover:brightness-90 font-medium text-xl rounded-full flex flex-row items-center px-[.625rem] py-0.5 text-[#A595E0]"
            >
              <span>Docs</span>
              <Icon
                icon="article"
                className="variable-font-medium leading-none"
              />
            </Link>
          )}
        </div>
      </div>
      {!!invert && (
        <div className="w-fit max-w-[50%] h-3/4 flex flex-row justify-end items-center">
          {Art}
        </div>
      )}
    </div>
  );
};
