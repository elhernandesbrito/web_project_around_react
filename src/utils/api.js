class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Erro: ${res.status}`);
    }
  
    // Obter os dados dos cards
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      }).then(this._checkResponse)
        .catch(err => console.error(err));
    }
  
    // Obter informações do usuário
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
      }).then(this._checkResponse)
        .catch(err => console.error(err));
    }
  
    // Atualizar informações do usuário
    updateUserInfo(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      }).then(this._checkResponse)
        .catch(err => console.error(err));
    }
  
    // Adicionar novo cartão
    addNewCard(data) {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      }).then(this._checkResponse)
        .catch(err => console.error(err));
    }
  
    // Excluir cartão
    deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      }).then(this._checkResponse)
        .catch(err => console.error(err));
    }
  
    // Curtir cartão
    likeCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers
      }).then(this._checkResponse)
        .catch(err => console.error(err));
    }
  
    // Remover curtida
    unlikeCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers
      }).then(this._checkResponse)
        .catch(err => console.error(err));
    }
  
    // Atualizar avatar
    updateAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatar
        })
      }).then(this._checkResponse)
        .catch(err => console.error(err));
    }

    changeLikeCardStatus(cardId, like) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: like ? "PUT" : "DELETE",
        headers: this._headers
      }).then(this._checkResponse);
    }
    
  }    
  
  // Criar e exportar a instância da API
  const api = new Api({
    baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
    headers: {
      authorization: '64f86844-5596-4bf4-8286-417b41bfb49a',
      'Content-Type': 'application/json'
    }
  });
  
  export default api;
  