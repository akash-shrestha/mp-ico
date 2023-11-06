import React, { useState } from "react";
import { FiX } from "react-icons/fi";

import { useModal } from "../../../utils/ModalContext";
import WalletModalStyleWrapper from "./BuyTokenModal.style";
import Button from "src/components/button";
import { buyToken } from "../../../lib/aptosLoader";
import BuyTokenButton from "../../buyTokenButton/BuyTokenButton";

const BuyTokenModal = ({ presaleId }) => {
  const [amount, setAmount] = useState(0);
  const { toggleBuyTokenModalVisibility } = useModal();

  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>Enter amount</h2>
              <button onClick={() => toggleBuyTokenModalVisibility()}>
                <FiX />
              </button>
            </div>
            <div className="form">
              <input
                type="text"
                className="input"
                onChange={(e) => setAmount(e.target.value)}
                placeholder={amount}
                autoFocus
              ></input>
              <div className="submit_button">
                <Button>
                  <BuyTokenButton
                    presaleAddress={presaleId}
                    aptosAmount={amount}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </WalletModalStyleWrapper>
    </>
  );
};

export default BuyTokenModal;
