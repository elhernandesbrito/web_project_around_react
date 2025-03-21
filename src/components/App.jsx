
import {useEffect, useState} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';


function App() {
  const [currentUser,setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData)
    })
    .catch((err) => console.error(`Erro ao buscar dados do usuário: ${err}`));
  }, []);

  return (
    <CurrentUserContext.Provider value ={currentUser}>
    <div className="page">
      <Header />
      <Main />
      <Footer />
     </div>
     </CurrentUserContext.Provider>
  );
}

export default App;