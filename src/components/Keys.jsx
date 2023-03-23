import { useContext } from "react";
import { WalletContext } from "./WalletContext";
import KeyIcon from "../assets/keyIcon.png";
import { Icon } from "./Icon";
export const Keys = () => {
  const wallet = useContext(WalletContext);
  if (wallet.connected) {
    const keys = 50;
    return (
      <div className="flex flex-row items-center gap-1 justify-end">
        <div className="flex flex-row max-sm:scale-75 justify-between items-center rounded-full gap-3 p-1 bg-white bg-opacity-60 border border-solid border-[#75757591]">
          <div
            className="tooltip tooltip-left"
            data-tip="Keys are required to do actions in this website"
          >
            <img src={KeyIcon} alt="key Icon" className="h-full object-fill" />
          </div>
          <div className="flex flex-row items-center justify-end gap-0.5">
            <div className="text-xl font-medium text-[#757575]">{keys}</div>
            <Icon
              icon="add_circle"
              onClick={() => {
                console.log("add keys");
              }}
              className="variable-font-fill text-[#F9B915] cursor-pointer hover:brightness-90"
            />
          </div>
        </div>
        <div className="max-lg:hidden">
          <a
            href="/"
            className="text-[#757575] text-xs flex flex-row items-center"
          >
            <Icon icon="link" />
            <span> what are keys?</span>
          </a>
        </div>
      </div>
    );
  }
  return (
    <button
      disabled
      className="btn btn-primary btn-xs sm:btn-sm md:btn-md btn-outline "
    >
      Connect Wallet
    </button>
  );
};
