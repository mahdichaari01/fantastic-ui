import { createContext, useEffect, useState } from "react";
/*
    This is a context object that will be used to pass the wallet object to the
    components that need it. The wallet object is created in the App component
    and passed to the context provider. The context provider is then used in the    
    components that need the wallet object.
    It should also contain the functions that are used to interact with the wallet
*/
export const WalletContext = createContext();

export const WalletProvider = ({ children, ...props }) => {
  const [wallet, setWallet] = useState({
    connected: false,
    walletID: undefined,
    connect: () => {
      //THIS IS AN EXAMPLE IMPLEMENTATION OF THE CONNECT FUNCTION

      // eslint-disable-next-line no-undef
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then(
          setWallet({
            connected: true,
            walletID: "0xe688b84b23f322a994A53dbF8E15FA82CDB71127 - 0.15 ETH",
            ...wallet,
          })
        )
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log("Please connect to MetaMask.");
          } else {
            console.error(err);
          }
        });
    },
    disconnect: () => {},
  });
  useEffect(() => {
    // create the async function that detects etherium
    const detection = async () => {
      //const provider = await detectEthereumProvider();
    };
    // call the function
    detection().then(() => {
      //add event listners for metamask
      // if (provider) {
      //   startApp(provider); // Initialize your app
      // } else {
      //   console.log('Please install MetaMask!');
      // }
      //ethereum.on('connect', handler: (connectInfo: ConnectInfo) => void);
      //ethereum.on('disconnect', handler: (error: { code: number; message: string }) => void);
      //ethereum.on('accountsChanged', handler: (accounts: Array<string>) => void);
    });
  }, []);
  return (
    <WalletContext.Provider value={wallet}>{children}</WalletContext.Provider>
  );
};
