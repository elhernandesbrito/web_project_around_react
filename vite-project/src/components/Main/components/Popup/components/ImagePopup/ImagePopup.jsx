import React from "react";

export default function ImagePopup({card, onClose}) {
    if (!card) return null;
    
    return (
           <div className="popup popup_opened">
            <div className="popup__content popup__content_content_image">
                <button
                 aria-label="Close modal"
                 className="popup__close"
                 type="button"
                 onClick={onClose}
                />
                <img
          className="popup__image"
          src={card.link}
          alt={card.name || "Imagem ampliada"}
        />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}