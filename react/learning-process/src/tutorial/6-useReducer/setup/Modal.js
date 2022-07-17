import React, { useEffect } from "react";

const Modal = ({ ModalContent, closeModal }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [closeModal]);
  return (
    <div className="modal">
      <p>{ModalContent}</p>
    </div>
  );
};

export default Modal;
