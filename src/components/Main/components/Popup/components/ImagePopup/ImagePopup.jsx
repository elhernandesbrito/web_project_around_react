import React from "react";
import closeIcon from "../../../../../../assets/images/closeIcon.png";

export default function ImagePopup({card, onClose}) {
    if (!card) return null;
    
   const isVertical = card.link && card.link.includes("_vertical");
   const styles = isVertical
   ? {width: "433px", height: "540px"}
   : {width: "816px", height: "540px"};
    
   return (
    <div className="popup__content" style={{position: "relative", ...styles}}>
      
      <img
        className="popup__close-image"
        onClick={onClose}
        src={closeIcon} alt="Fechar popup" 
        style={{
          position: "absolute",
          top: "10px",
          right: "-40px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        />
       
      
      <img
        className="popup__image"
        src={card.link}
        alt={card.name || "Imagem ampliada"}
      />
      <p className="popup__caption">{card.name}</p>
    </div>
  );
}