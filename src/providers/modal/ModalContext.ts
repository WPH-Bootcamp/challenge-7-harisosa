import { createContext } from "react";
export type ModalId = string;

export type ModalContextValue = {
  openModalId: ModalId | null;
  isOpen: boolean;
  openModal: (modalId: ModalId) => void;
  closeModal: () => void;
  toggleModal: (modalId: ModalId) => void;
};
export const ModalContext = createContext<ModalContextValue | undefined>(undefined);
