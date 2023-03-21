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
  wallet: "",
  setWallet: () => {},
  balance: 0,
});
