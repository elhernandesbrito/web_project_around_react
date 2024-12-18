import React from "react";
import trashIcon from '../../../../assets/images/Trash.png';
                   

export default function Card({ card, handleOpenPopup }) {
  const {name, link, isLiked, likes = 0} = card;
  
    const imageComponent = {
      title: name,
      children: (
        <img
        className = "popup__image"
        src={link}
        alt={name || "Imagem ampliada"}
      />
      ),
    }

    return (
    <li className="cards__card">
      <img
        className="cards__card-img"
        src={link || ""}
        alt={name || "Imagem do card"}
       onClick={() => handleOpenPopup(imageComponent)}
      />
 
      <button
        aria-label="Delete card"
        className="cards__card-lixeira"
        style={{
          backgroundImage: `url(${trashIcon})`,
        }}
        type="button"
      ></button>

      <div className="cards__card_interation">
        <h5 className="cards__card-name">{name}</h5>
        <button
          aria-label="Like card"
          type="button"
          className={`cards__cardLike ${isLiked ? "cards__cardLike--liked"  : ""}`}
        ></button>
      </div>

      <div className="cards__cardLike-wrapper">
        <span className="cards__like-counter">{likes}</span>
      </div>

      {/* Informações adicionais (opcional) 
      <div className="cards__card-owner">{owner}</div>
      <div className="cards__card-created">
        {createdAt ? new Date(createdAt).toLocalDateString("pt-BR") :""}
        
      </div>*/}
    </li>
  );
}
