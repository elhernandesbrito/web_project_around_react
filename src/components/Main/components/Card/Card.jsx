import React, {useContext} from "react";
import currentUserContext from "../../../../contexts/CurrentUserContext.js";
import trashIcon from '../../../../assets/images/Trash.png';
import likeIcon from '../../../../assets/images/heart.jpg';
import heartActiveIcon from '../../../../assets/images/heart_active.jpg';                 

export default function Card({ card, onClick, onLikeClick }) {
  const {name, link, likes = [] } = card;
  const currentUser = useContext(currentUserContext);

  //const isLiked = card.likes?.some(user => user._id === currentUser?._id);
  const isLiked = card.isLiked;
 
     return (
    <li className="cards__card">
        <img
          className="cards__card-img"
          src={link || ""}
          alt={name || "Imagem do card"}
        onClick={onClick} />
  
      <div className="cards__card-lixeira">
        <img
          src={trashIcon}
          alt="imagem de lixeira"
          className="cards__card-lixeira-image"
        />
      </div>

      <div className="cards__card_interation">
        <h5 className="cards__card-name">{name}</h5>
        
      <div
        className={`cards__cardLike ${isLiked ? "cards__cardLike_active" : ""}`}  
        onClick={() => onLikeClick(card)}
      />


      </div>

        <div className="cards__cardLike-wrapper">
          <span className="cards__like-counter">{likes.length}</span>
        </div>
    </li>
  );
}
