import { Page } from "../../components/Page";
import { Icon } from "../../components/Icon";
import {
  BasicInput,
  themeContext,
  Button,
  Select,
} from "../../components/inputs";
import { useContext } from "react";
import { WalletContext } from "../../components/WalletContext";
export default function CreatePage() {
  const { wallet } = useContext(WalletContext);
  return (
    <Page noFooter>
      <themeContext.Provider value={"blue"}>
        <div className="w-full px-5 flex flex-col md:flex-row items-center  justify-evenly">
          <div
            id="form"
            className="flex w-full md:w-2/5 max-w-[31.25rem] mb-10 flex-col items-center gap-7 max-sm:px-3 px-[2.4375rem] justify-start rounded-3xl py-8 sm:bg-white sm:shadow-lg"
          >
            <div className="text-center w-full">
              <h1 className="font-Roboto text-4xl font-bold mb-2">Create</h1>
              <div className="text-sm font-light color-[#3F3F3F]">
                {wallet ? (
                  <div className="flex flex-row gap-1 items-center">
                    <Icon icon="wallet" className="variable-font-light" />
                    <div className="w-full break-all">{wallet}</div>
                  </div>
                ) : (
                  "Please Connect your wallet to deploy"
                )}
              </div>
            </div>
            <div id="main-form" className="flex flex-col gap-3 w-full">
              <BasicInput
                label="Collection Address"
                name="CollectionAdr"
                placeholder="Enter your contract address"
                type="text"
              />
              <BasicInput
                label="Collection Name"
                name="CollectionName"
                placeholder="Enter your contract Name"
                type="text"
              />
              <Select label="Choose Function" name="Function">
                <option disabled selected>
                  Select Function
                </option>
                <option value="Free">Free Mint</option>
                <option value="Presale">Presale Mint</option>
                <option value="Whitelist">WhiteList Mint</option>
              </Select>
              <BasicInput
                label="NFT Collection Description"
                name="desc"
                type="text"
                placeholder="link"
              />
              <BasicInput
                label="Instagram"
                name="instagram"
                type="text"
                placeholder="link"
              />
              <BasicInput
                label="Twitter"
                name="twitter"
                type="text"
                placeholder="link"
              />
              <BasicInput
                label="Discord"
                name="discord"
                type="text"
                placeholder="link"
              />
            </div>
            <div
              id="controls"
              className="w-full flex flex-row justify-between items-center "
            >
              <Button
                className="bg-[#FCFCFC] text-mauve max-sm:order-1 outline-none border-none hover:bg-[#e9e9e9] btn-xs"
                label="More Information"
                href={"https://docs.bayc.app/deploy"}
              />
              <Button label="Connect" className="order-3" />
            </div>
          </div>
          <div
            id="preview"
            className="w-full md:w-2/5 max-w-4xl text-center font-bold text-xl max-sm:px-3 px-[2.4375rem]"
          >
            <p>Preview</p>
            <div className="w-full aspect-w-3 aspect-h-2 rounded-2xl bg-slate-500 shadow-lg"></div>
          </div>
        </div>
      </themeContext.Provider>
    </Page>
  );
}
