import { createContext } from "react";

export const ModalState = { walletModal : false };

export const ModalContext = createContext({
  modalState: {
    walletModal: false,
  },
  setModalState: (_) => {},
});