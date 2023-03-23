import { createContext } from "react";
/*
    This is a context object that will be used to pass the wallet object to the
    components that need it. The wallet object is created in the App component
    and passed to the context provider. The context provider is then used in the    
    components that need the wallet object.
    It should also contain the functions that are used to interact with the wallet
*/
export const WalletContext = createContext({
  connected: true,
  wallet: "0xe688b84b23f322a994A53dbF8E15FA82CDB71127 - 0.15 ETH",
  setWallet: () => {},
  connect: () => {},
  balance: 4,
});
