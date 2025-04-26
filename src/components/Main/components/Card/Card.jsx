import React from "react";
import trashIcon from '../../../../assets/images/Trash.png';
import likeIcon from '../../../../assets/images/heart.jpg';
import ImagePopup from '../Popup/components/ImagePopup/ImagePopup';
import { useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext'
                   

export default function Card({ card, handleOpenPopup, onCardLike  }) {

  const {name, link, likes = 0} = card;
  
  const currentUser = useContext(CurrentUserContext);
  //const isLiked = card.likes.some(like => like._id === currentUser._id);
  const isLiked = (card.likes || []).some(like => like._id === currentUser._id);

  const cardLikeButtonClassName = `cards__cardLike ${isLiked ? 'cards__cardLike_active' : ''}`;


  
    const imageComponent = {
      title: name,
      children: <ImagePopup card={card} />
    };

    const handleLikeClick = () => {
      onCardLike(card);
    };
  

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
        <div className={cardLikeButtonClassName} 
        onClick={handleLikeClick}
        ></div>
      </div>

      <div className="cards__cardLike-wrapper">
         <span className="cards__like-counter">{likes.length}</span>
      </div>
    </li>
  );
}
