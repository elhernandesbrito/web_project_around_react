import React from "react";
import trashIcon from '../../../../assets/images/Trash.png';
import likeIcon from '../../../../assets/images/heart.jpg';

                   

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
  
      <div className="cards__card-lixeira">
        <img
          src={trashIcon}
          alt="imagem de lixeira"
          className="cards__card-lixeira-image"
        />
      </div>

      <div className="cards__card_interation">
        <h5 className="cards__card-name">{name}</h5>
        <div className="cards__cardLike">
            <img
                src={likeIcon}
                alt="imagem botão like"
                className={`cards__cardLike-icon ${isLiked ? 'cards__cardLike-active' : ''}`}
            />
        </div>
      </div>

        <div className="cards__cardLike-wrapper">
          <span className="cards__like-counter">{likes}</span>
        </div>
    </li>
  );
}
