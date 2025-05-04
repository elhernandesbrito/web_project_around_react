
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { useEffect, useState } from 'react';
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js'; 


function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  
 
    useEffect(() => {
      (async () => {
        try {
          const data = await api.getUserInfo();
          setCurrentUser(data);
        } catch (err) {
          console.error('Erro ao buscar dados do usuário:', err);
        }
      })();
    }, []);

   

    const handleOpenPopup = (popup) => {
      setPopup(popup);
    };

    const handleClosePopup = () => {
      setPopup(null);
      
    };

    const handleUpdateUser = (data) => {
      (async () => {
        try {
          const newData = await api.updateUserInfo(data);
          setCurrentUser(newData);
          handleClosePopup();
        } catch (err) {
          console.error('Erro ao atualizar dados do usuário:', err);
        }
      })();
    };

    const handleUpdateAvatar = (data) => {
      (async () => {
        try {
          const updatedUser = await api.updateAvatar(data);
          setCurrentUser(updatedUser);
          handleClosePopup();
        } catch (err) {
          console.error('Erro ao atualizar avatar:', err);
        }
      })();
    }; 
  
    useEffect(() => {
      api.getInitialCards()
        .then((cardsData) => {
          setCards(cardsData);
        })
        .catch((err) => {
          console.error("Erro ao buscar os cards:", err);
        });
    }, []);

    async function handleCardLike(card) {
      const isLiked = !card.isLiked;
        await api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
}

    function handleCardDelete(card) {
      api.deleteCard(card._id)
        .then(() => {
          setCards((prevCards) =>
            prevCards.filter((c) => c._id !== card._id)
          );
        })
        .catch((err) => console.error(err));
    }

    function handleAddPlaceSubmit(data) {
      (async () => {
        try {
          const newCard = await api.addNewCard(data);
          setCards([newCard, ...cards]);
          handleClosePopup();
        } catch (err) {
          console.error("Erro ao adicionar novo card:", err);
        }
      })();
    }
   return (
    <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
    <div className="page">
      <Header />
      <Main 
        popup={popup}
        onOpenPopup={handleOpenPopup}
        onClosePopup={handleClosePopup}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        onAddPlaceSubmit={handleAddPlaceSubmit}
      />
      <Footer />
     </div>
     </CurrentUserContext.Provider>
  );
}

export default App;