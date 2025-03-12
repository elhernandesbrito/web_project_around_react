import React, { useState, useEffect, useContext } from "react";

import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import Card from "./components/Card/Card.jsx";
import ImagePopup from "./components/Popup/components/ImagePopup/ImagePopup";
import avatarImage from "../../assets/images/avatar.jpg";
import editButtonImage from "../../assets/images/EditButton.png";
import vectorAddImage from "../../assets/images/VectorAdd.png";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import api from "../../utils/api.js";
import currentUserContext from "../../contexts/CurrentUserContext.js";

function Main() {
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);
  const currentUser = useContext(currentUserContext);

  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Alterar a foto do perfil", children: <EditAvatar /> };

  useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => console.error(`Erro ao buscar cartões: ${err}`));
  }, []);

  const handleOpenPopup = (popupData) => setPopup(popupData);
  const handleClosePopup = () => setPopup(null);


  const handleLikeClick = (card) => {
 
  const isLiked = Array.isArray(card.likes) && card.likes.some(user => user._id === currentUser._id)

    const apiCall = isLiked ? api.unlikeCard(card._id) : api.likeCard(card._id);

    apiCall
      .then((updatedCard) => {
        setCards((prevCards) =>
          prevCards.map((c) => (c._id === card._id ? updatedCard : c))
        );
      })
      .catch((err) => console.error(`Erro ao atualizar curtida: ${err}`));
  };

  return (
    <>
      <section className="profile">
        <div className="profile__column">
          <div className="profile__avatar-container">
            <img 
              src={currentUser.avatar || ""} 
              alt="imagem avatar" 
              className="profile__avatar" 
            />
            <img
              src={editButtonImage}
              alt="Botão editar avatar"
              className="profile__editAvatar"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            />
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name || "Carregando... "}</h1>
            <img
              src={editButtonImage}
              alt="Botão editar perfil"
              className="profile__edit"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
            <h3 className="profile__explorer">{currentUser.about || "Carregando..."}</h3>
          </div>

          <div className="profile__addButton">
            <img
              src={vectorAddImage}
              alt="imagem botão adicionar"
              className="profile__addButton-cards"
              onClick={() => handleOpenPopup(newCardPopup)}
            />
          </div>
        </div>
      </section>

      <div className="rechardCards">
        <ul className="rechardCards cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onClick={() =>
                handleOpenPopup({
                  title: null,
                  children: <ImagePopup card={card} onClose={handleClosePopup} />,
                  hideCloseButton: true,
                })
              }
              onLikeClick={handleLikeClick} 
            />
          ))}
        </ul>
      </div>

      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          hideCloseButton={popup.hideCloseButton}
        >
          {popup.children}
        </Popup>
      )}
    </>
  );
}

export default Main;
