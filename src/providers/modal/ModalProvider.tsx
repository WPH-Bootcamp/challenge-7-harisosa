import { useCallback, useMemo, useState } from "react";
import { ModalContext, type ModalContextValue, type ModalId } from "./ModalContext";

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [openModalId, setOpenModalId] = useState<ModalId | null>(null);

  const openModal = useCallback((modalId: ModalId) => {
    setOpenModalId(modalId);
  }, []);

  const closeModal = useCallback(() => {
    setOpenModalId(null);
  }, []);

  const toggleModal = useCallback((modalId: ModalId) => {
    setOpenModalId((prev) => (prev === modalId ? null : modalId));
  }, []);

  const value = useMemo<ModalContextValue>(
    () => ({
      openModalId,
      isOpen: openModalId !== null,
      openModal,
      closeModal,
      toggleModal,
    }),
    [openModalId, openModal, closeModal, toggleModal]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
