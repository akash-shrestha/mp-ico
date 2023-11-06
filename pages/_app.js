import ContextProvider from "src/utils/ContextProvider";
import GlobalStyles from "@assets/styles/GlobalStyles";
import { Analytics } from "@vercel/analytics/react";
import {
  FewchaWalletAdapter,
  PontemWalletAdapter,
  MartianWalletAdapter,
  WalletProvider,
  AptosWalletAdapter,
} from "@manahippo/aptos-wallet-adapter";
import { useState } from "react";

const App = ({ Component, pageProps }) => {
  const [modalState, setModalState] = useState({
    walletModal: false,
  });
  const wallets = [
      new AptosWalletAdapter(),
      new MartianWalletAdapter(),
      new PontemWalletAdapter(),
      new FewchaWalletAdapter(),
    ];
  return (
    <WalletProvider wallets={wallets} autoConnect={true} >
    <ContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </ContextProvider>
    </WalletProvider>
  );
};

export default App;
