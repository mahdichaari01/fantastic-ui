import { Page } from "../../components/Page";
import { Icon } from "../../components/Icon";
import {
  BasicInput,
  themeContext,
  TextArea,
  InputGroup,
  Checkbox,
  Button,
} from "../../components/inputs";
import { Steps } from "../../components/Steps";
import { useContext } from "react";
import { WalletContext } from "../../components/WalletContext";
export default function DeployPage() {
  const { wallet } = useContext(WalletContext);
  return (
    <Page noFooter>
      <themeContext.Provider value={"mauve"}>
        <div className="flex w-fit max-w-full mb-10 flex-col items-center gap-7 px-[2.4375rem] justify-start rounded-3xl py-8 mx-4 sm:bg-white sm:shadow-lg">
          <div className="text-center">
            <h1 className="font-Roboto text-4xl font-bold mb-2">Deploy</h1>
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
          <div
            id="main-form"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 justify-content-center"
          >
            <div className="flex flex-col gap-3 max-w-[25rem]">
              <BasicInput
                label="Collection Name"
                type="text"
                placeholder="Bored Ape Yacht Club"
                info="random stuff"
                name="Collection Name"
              />
              <BasicInput
                label="Symbol"
                type="text"
                placeholder="BAYC"
                name="Symbol"
              />
              <BasicInput
                label="Max Supply"
                type="number"
                placeholder="7500"
                info="random stuff"
                name="Max Supply"
              />
              <BasicInput
                label="Base URI"
                type="url"
                placeholder="ipfs://QmXoypizjW3WFfaA4rx/"
                info="random stuff"
                name="Base URI"
              />
              <BasicInput
                label="Unrevealed Base URI"
                type="url"
                placeholder="ipfs://QmXoypizjW3WFfaA4rx/"
                info="random stuff"
                name="Unrevealed Base URI"
              />
              <InputGroup>
                <Checkbox label="Free Mint" name="Mintable" />
                <div className="flex flex-row w-full gap-6">
                  <BasicInput
                    label="Max Free"
                    placeholder="250"
                    type="number"
                    name="Max Free"
                    info="afat"
                  />
                  <BasicInput
                    label="Max Free per wallet"
                    placeholder="3"
                    type="number"
                    name="Max Free"
                    info="afat"
                  />
                </div>
              </InputGroup>
            </div>
            <div className="flex flex-col gap-3 max-w-[25rem]">
              <InputGroup>
                <Checkbox label="Public Sale Mint" name="publicSale" />
                <BasicInput
                  label="Price Public Sale Mint"
                  placeholder="0.2"
                  name="pricepublicsale"
                  type="number"
                />
              </InputGroup>
              <InputGroup>
                <Checkbox label="Presale Mint" name="preSale" />
                <div className="flex flex-row w-full gap-6">
                  <BasicInput
                    label="Price Whitelist Mint"
                    placeholder="0.1"
                    type="number"
                    name="PriceWhitlst"
                    info="afat"
                  />
                  <BasicInput
                    label="Max Whitelist"
                    placeholder="2500"
                    type="number"
                    name="Max Free"
                    info="afat"
                  />
                </div>
                <TextArea
                  label="Whitelist addresses"
                  resize={false}
                  name="whitelist"
                  placeholder={`0x4D04E8da733B7a79f32DC709E019309f3F1C4Af0
0x4D04E8da733B7a79f32DC709E019309f3F1C4Af0
`}
                />
              </InputGroup>
              <Checkbox
                label={
                  <span>
                    I Accept the <b className="font-bold">Terms and Services</b>{" "}
                    and the <b className="font-bold">Privacy Policy</b>
                  </span>
                }
                name="verify"
                className="text-xs font-light"
                size="sm"
              />
              <BasicInput
                label="Contract Address"
                name="verif address"
                type="text"
                placeholder="0x4D04E8da733B7a79f32DC709E019309f3F1C4Af0"
              />
            </div>
          </div>

          <div
            id="controls"
            className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-7 "
          >
            <Button
              className="bg-[#FCFCFC] text-mauve max-sm:order-1 max-md:hidden outline-none border-none hover:bg-[#adadad]"
              label="More Information"
              href={"https://docs.bayc.app/deploy"}
            />
            <div className="max-sm:order-2 w-full flex flex-row justify-center">
              <Steps
                steps={[
                  "connection",
                  "verification",
                  "compilation",
                  "deployment",
                  "verification",
                  "finished",
                ]}
                current={4}
                className=""
              />
            </div>
            <Button label="Connect" className="max-sm:order-1" />
          </div>
        </div>
      </themeContext.Provider>
    </Page>
  );
}
