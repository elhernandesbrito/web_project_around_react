import React from "react";
import closeIcon from "../../../../../../assets/images/closeIcon.png";

export default function ImagePopup({card, onClose}) {
    if (!card) return null;
    
   const isVertical = card.link && card.link.includes("_vertical");
   const styles = isVertical
   ? {width: "433px", height: "540px"}
   : {width: "816px", height: "540px"};
    
   return (
    <div className="popup__content" style={styles}>
      <img
        className="popup__image"
        src={card.link}
        alt={card.name || "Imagem ampliada"}
      />
      <p className="popup__caption">{card.name}</p>
    </div>
  );
}