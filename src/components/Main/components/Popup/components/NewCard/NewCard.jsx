
export default function NewCard() {
    return (
      <form class="popupCards__form form" name="register">
          <h3 class="popupCards__EditarPerfil">Novo Local</h3>
              
            <div class="form__input"> 
              <input 
                className="popupCards__form-name name-input"
                type="text" 
                name="name" 
                placeholder="Nome" 
                minlength="2"
                maxlength="40" 
                required/>
                <span className="form-input-error form__input-name popupCards__form-name-error"></span>
            </div>

            <div class="form__input">
              <input 
                className="popupCards__form-link name-input"
                type="url" 
                name="link" 
                placeholder="Link da imagem" 
                required/>
                <span className="form-input-error form__input-link popupCards__form-link-error"></span>
            </div>
            
            <button type="submit" name="enviar" class="popupCards__submit-save saveButton">
              Salvar
            </button>
         </form>
    );
  }
  