
import React, {useState} from 'react';
import Popup from './components/Popup/Popup';
import NewCard from './components/Popup/components/NewCard/NewCard';
import Card from './components/Card/Card.jsx';
import avatarImage from '../../assets/images/avatar.jpg';
import editButtonImage from '../../assets/images/EditButton.png';
import vectorAddImage from '../../assets/images/VectorAdd.png';
import EditProfile from './components/Popup/components/EditProfile/EditProfile';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar';
import api from '../../utils/api.js';
import { useEffect, useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';




function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.error("Erro ao buscar os cards:", err);
      });
  }, []);
  

  const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = {title: "New card", children: <NewCard />};
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatarPopup =  { title: "Alterar a foto do perfil", children: <EditAvatar /> };
  
  const handleOpenPopup = (popup) => {
    setPopup(popup);
  };

  const handleClosePopup = () => {
    setPopup(null);
    setSelectedCard(null); 
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  /*async function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    await api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }*/
      function handleCardLike(card) {
        // Protege contra casos onde card.likes está undefined
        const isLiked = Array.isArray(card.likes) && card.likes.some((like) => like._id === currentUser._id);
       
        api.changeLikeCardStatus(card._id, !isLiked)
          .then((newCard) => {
            
            if (!newCard.likes) {
              console.warn("O card retornado da API não possui 'likes'", newCard);
            }
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
          })
          .catch((err) => {
            console.error("Erro ao tentar curtir/descurtir o card:", err);
          });
      }
      
  
    return (
      <>
      <section className="profile">

        <div className="profile__column">

          <div className="profile__avatar-container">
            <img 
            src={currentUser.avatar}
            alt="imagem avatar" 
            className="profile__avatar" />
            
            <img 
            src={editButtonImage} 
            alt="Botão editar avatar" 
            className="profile__editAvatar" 
            onClick={() => handleOpenPopup(editAvatarPopup)}
            />
            
          </div>

          <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
            <img
              src={editButtonImage}
              alt="Botão editar perfil"
              className="profile__edit"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
              <h3 className="profile__explorer">{currentUser.about}</h3>
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
      
        <ul className="rechardCards cards__list">
          {cards.map((card) => (
            <Card 
            key={card._id} 
            card={card} 
            onImageClick={handleCardClick}
            handleOpenPopup = {handleOpenPopup}
            onCardLike={handleCardLike}
             />
          ))}
        </ul>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

        {selectedCard && (
          <ImagePopup card={selectedCard} onClose={handleClosePopup} />
        )}
      </>
    );
};

export default Main;
