import { useEffect, useRef, useMemo } from "react";
import frostedTexture from "../../assets/frostedTexture.png";
export const Card = ({ imgSrc, name, description, price, remaining }) => {
  const cardref = useRef(null);
  const root = useMemo(() => document.getElementById("root"), []);
  useEffect(() => {
    if (cardref.current) {
      const constrain = 300;
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

        window.requestAnimationFrame(function () {
          transformElement(cardref.current, position);
        });
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
                border-radius: 2.0625rem;
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
                left:-4rem;
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
        className="w-full font-Inter text-white px-[2.4375rem] py-7 rounded-[2.0625rem] flex flex-col gap-[.5625rem] justify-start border-opacity-25 border-[#FFFBFB] border"
        style={{
          background: `linear-gradient(253.09deg, rgba(217, 217, 217, 0.25) -7.53%, rgba(217, 217, 217, 0) 97.04%)`,
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="font-normal text-base opacity-75 leading-none">
            {remaining} remaining
          </div>
          <div className="text-xl font-bold">
            {price}
            <sup>ETH</sup>
          </div>
        </div>
        <div className="aspect-w-1 aspect-h-1 h-full rounded-[1.25rem] overflow-hidden shadow-2xl shadow-[#ffffff3d]">
          <img className="object-cover" src={imgSrc} alt="NFT" />
        </div>
        <div className="w-full flex flex-col items-start gap-1 leading-none font-Inter text-white opacity-75">
          <div className="text-[40px] font-black break-all">{name}</div>
          <div className="text-[.9375rem] leading-tight font-normal">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
