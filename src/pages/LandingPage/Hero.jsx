import Bg from "../../assets/HeroBg.jpg";
import { Button } from "../../components/inputs";
export const Hero = () => (
  <div
    className="w-full bg-center bg-cover bg-no-repeat max-sm:bg-[length:0px_0px] flex text-center flex-col items-center gap-4 pt-28  pb-40 px-5"
    style={{ backgroundImage: `url(${Bg})` }}
  >
    <div className="text-black font-black font-WorkSans text-5xl">
      Welcome to <span className="text-[#A597FD]">*fantastic</span>
    </div>
    <p className="t font-Interext-lg w-fit max-w-2xl leading-snug">
      Fantastic Dapp is your all in one solution for repetitive blockchain tasks
      that require huge technical knowledge. We provide enable non tech savvy
      people to sell their art on the block chain with ease.
    </p>
    <Button className="btn-outline btn-md" label="documentation" href="/Docs" />
  </div>
);
