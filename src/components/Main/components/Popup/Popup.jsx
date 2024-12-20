import React from "react";
import closeIcon from "../../../../assets/images/CloseIcon.png";

export default function Popup({ title, children, onClose }) {
  return (
    <section className="popup">
    <div className="popup__content">
      <img
        src={closeIcon}
        alt="Ícone de fechar"
        className="popup__closeButton"
        onClick={onClose}
      />
      <h3 className="popup__EditarPerfil">{title}</h3>
        {children}
      </div>
    </section>
  );
}
