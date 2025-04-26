import React from "react";
import closeIcon from "../../../../assets/images/CloseIcon.png";


export default function Popup({ title, children, onClose }) {
  return (
    <section className="popup">
      <img
        src={closeIcon}
        alt="Ícone de fechar"
        className="popup__closeButton"
        onClick={onClose}
      />
      <div className="popup__content ">
        {children}
      </div>
    </section>
  );
}

