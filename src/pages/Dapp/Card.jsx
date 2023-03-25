import { useEffect, useRef, useMemo } from "react";
import frostedTexture from "../../assets/frostedTexture.png";
export const Card = ({ imgSrc, name, description, price, remaining, xs }) => {
  const cardref = useRef(null);
  const root = useMemo(() => document.getElementById("root"), []);
  useEffect(() => {
    if (cardref.current) {
      const constrain = 300;
      let frameID = null;
      function transforms(x, y, el) {
        let box = el.getBoundingClientRect();
        let calcX = -(y - box.y - box.height / 2) / constrain;
        let calcY = (x - box.x - box.width / 2) / constrain;

        return (
          "perspective(100px) " +
          "   rotateX(" +
          calcX +
          "deg) " +
          "   rotateY(" +
          calcY +
          "deg) "
        );
      }
      function transformElement(el, xyEl) {
        el.style.transform = transforms.apply(null, xyEl);
      }

      root.onmousemove = function (e) {
        let xy = [e.clientX, e.clientY];
        let position = xy.concat([cardref.current]);

        frameID = window.requestAnimationFrame(function () {
          transformElement(cardref.current, position);
        });
      };
      return () => {
        frameID = window.cancelAnimationFrame(frameID);
        root.onmousemove = null;
      };
    }
  }, [root, cardref]);
  return (
    <div className="relative">
      <style>
        {`#nft-card::before {
                height: 100%;
                width: 100%;
                content: "";
                top:0;
                left:0;
                border-radius: ${xs ? "1vw" : "2.0625rem"};
                position: absolute;
                background: url(${frostedTexture});
                opacity: 0.25;
                z-index: -1;
                backdrop-filter: blur(1.5rem);
            }
            #nft-card::after{
                height: 100%;
                width: 100%;
                content: "";
                top:0;
                left:${xs ? "-1.25vw" : "-4rem"};
                position: absolute;
                background: url(${imgSrc});
                z-index: -1;
                filter:blur(5rem);
            }
        #nft-card > *{
            width: 100%;
            overflow-x: hidden;
        }
        `}
      </style>
      <div
        ref={cardref}
        id="nft-card"
        className={`w-full font-Inter text-white   flex flex-col  justify-start border-opacity-25 border-[#FFFBFB] border ${
          xs
            ? "px-[1.4vw] py-[1vw] md:px-[0.8vw] md:py-[0.5vw] gap-[0.4vw] md:gap-0.5 rounded-[1vw]"
            : "px-[2.4375rem] py-7 gap-[.5625rem] rounded-[2.0625rem]"
        }`}
        style={{
          background: `linear-gradient(253.09deg, rgba(217, 217, 217, 0.25) -7.53%, rgba(217, 217, 217, 0) 97.04%)`,
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <div
            className={`font-normal ${
              xs ? "text-[1vw] md:text-[0.5vw]" : "text-base"
            }  opacity-75 leading-none`}
          >
            {remaining} remaining
          </div>
          <div
            className={`${
              xs ? "text-[1vw] md:text-[0.5vw] leading-tight" : "text-xl"
            } font-bold`}
          >
            {price}
            <sup>ETH</sup>
          </div>
        </div>
        <div className="aspect-w-1 aspect-h-1 h-full rounded-lg overflow-hidden shadow-2xl shadow-[#ffffff3d]">
          <img className="object-cover" src={imgSrc} alt="NFT" />
        </div>
        <div
          className={`w-full flex flex-col items-start ${
            xs ? "" : "gap-1"
          } leading-none font-Inter text-white opacity-75`}
        >
          <div
            className={`${
              xs
                ? "text-[1.8vw] md:text-[0.8vw] leading-tight"
                : "text-[2.5rem]"
            } font-black break-all`}
          >
            {name}
          </div>
          <div
            className={`${
              xs ? "text-[0.9vw] md:text-[0.3vw]" : "text-[.9375rem]"
            } leading-tight text-left font-normal`}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
