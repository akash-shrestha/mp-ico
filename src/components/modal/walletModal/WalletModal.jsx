import Link from "next/link";
import { useContext } from "react";
import { FiX, FiChevronRight } from "react-icons/fi";
import { useWallet, Wallet } from "@manahippo/aptos-wallet-adapter";

import { ModalContext } from "src/lib/walletcontext";
import { useModal } from "src/utils/ModalContext";
import WalletModalStyleWrapper from "./WalletModal.style";

const WalletModal = () => {
  const { wallets, connect, disconnect } = useWallet();
  const { modalState, setModalState } = useContext(ModalContext);
  const { walletModalHandle } = useModal();

  async function connectWallet(wallet) {
    console.log(wallet.adapter.name);
    connect(wallet.adapter.name);
    setModalState({ ...modalState, walletModal: false });
  }

  function disconnectWallet() {
    disconnect();
    setModalState({ ...modalState, walletModal: false });
  }

  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              {/* <p>Please select a wallet to connect to this marketplace</p> */}
              <button onClick={walletModalHandle}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="wallet_list">
                <>
                  {wallets.map((wallet, i) => {
                    return (
                      <Link href="#">
                        <a key={i} onClick={() => connectWallet(wallet)}>
                          <img
                            src={wallet.adapter.icon}
                            alt="Meta-mask-Image"
                            className="walletIcon"
                          />
                          {wallet.adapter.name}
                          <span>
                            <FiChevronRight />
                          </span>
                        </a>
                      </Link>
                    );
                  })}
                </>
              </div>
              <div className="modal_bottom_text">
                By connecting your wallet, you agree to our
                <Link href="# ">
                  <a>Terms of Service</a>
                </Link>
                <Link href="#">
                  <a>Privacy Policy</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </WalletModalStyleWrapper>
    </>
  );
};

export default WalletModal;
