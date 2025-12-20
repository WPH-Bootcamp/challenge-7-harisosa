import React, { useEffect, useState } from "react";
import "./Modal.css";
import { useModal } from "../../../shared/hooks";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

interface ModalContent {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  buttonText: string;
}

const modalSuccessContent: ModalContent = {
  iconSrc: "/assets/icons/message-success-icon.svg",
  iconAlt: "Success Icon",
  title: "Message Received!",
  description: "Thanks for reaching out — we’ll get back to you as soon as possible",
  buttonText: "Back to Home"
};

const modalFailedContent: ModalContent = {
  iconSrc: "/assets/icons/message-failed-icon.svg",
  iconAlt: "Error Icon",
  title: "Oops! Something went wrong.",
  description: "We couldn’t send your message. Please try again or check your connection.",
  buttonText: "Try Again"
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose
}) => {
  const { openModalId } = useModal();

  const [modalContents, setModalContents] = useState<ModalContent>(modalSuccessContent);

  useEffect(() => {
    if (openModalId === "modal-success") {
      setModalContents(modalSuccessContent);
    } else {
      setModalContents(modalFailedContent);
    }
  }, [openModalId]);

  if (!open) return null;

  return (
    <div
      className='modal'
      role="dialog"
      aria-modal="true"
      aria-labelledby="message-received-title"
    >
      <button
        type="button"
        className='backdrop'
        aria-label="Close modal"
        onClick={onClose}
      />
      <div className='modalBox'>
        <div className='top'>
          <img className='icon' src={modalContents.iconSrc} alt={modalContents.iconAlt} />
        </div>
        <div className='bottom'>
          <h2 id="message-received-title" className='title'>
            {modalContents.title}
          </h2>
          <p className='desc'>{modalContents.description}</p>
          <button type="button" className='cta' onClick={onClose}>
            {modalContents.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};


export default Modal;