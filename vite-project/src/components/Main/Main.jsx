
import React, {useState} from 'react';
import Popup from './components/Popup/Popup';
import NewCard from './components/Popup/components/NewCard/NewCard';
import Card from './components/Card/Card.jsx';
import ImagemPopup from "./components/Popup/components/ImagePopup/ImagePopup";
import avatarImage from '../../assets/images/avatar.jpg';
import editButtonImage from '../../assets/images/EditButton.png';
import vectorAddImage from '../../assets/images/VectorAdd.png';
import EditProfile from './components/Popup/components/EditProfile/EditProfile';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar';

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null); // Novo estado

  const newCardPopup = {title: "New card", children: <NewCard />};
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatarPopup =  { title: "Editar perfil", children: <EditAvatar /> };


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

    return (
        <>
         <section className="profile">

        <div className="profile__column">

          <div className="profile__avatar-container">
            <img 
            src={avatarImage}
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
            <h1 className="profile__name">Jacques Custeau</h1>
            <img
             src={editButtonImage}
              alt="Botão editar perfil"
              className="profile__edit"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
            <h3 className="profile__explorer">Explorar</h3>
          </div>

          <div className="profile__addButton">
            <button
              aria-label="Add card"
              className="profile__add-button"
              type="button"
              onClick={() => handleOpenPopup(newCardPopup)}
            >
              <img 
              src={vectorAddImage} 
              alt="imagem botão adicionar" 
              className="profile__addButton-cards" />
              
            </button>
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
             />
          ))}
        </ul>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

        {selectedCard && (
          <ImagemPopup card={selectedCard} onClose={handleClosePopup} />
        )}
      </>
    );
};

export default Main;
