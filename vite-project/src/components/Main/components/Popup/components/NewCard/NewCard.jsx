
export default function NewCard() {
    return (
      <form class="popupCards__form form" name="register" noValidate>
          <h3 class="popupCards__EditarPerfil">Novo Local</h3>
              
            <div class="form__input"> 
              <input 
                class="popupCards__form-name name-input"
                type="text" 
                name="name" 
                placeholder="Nome" 
                value=""
                minlength="2"
                maxlength="40" 
                required/>
                <span class="form-input-error form__input-name popupCards__form-name-error"></span>
            </div>

            <div class="form__input">
              <input 
                class="popupCards__form-link name-input"
                type="url" 
                name="link" 
                value="" 
                placeholder="Link da imagem" 
                required/>
                <span class="form-input-error form__input-link popupCards__form-link-error"></span>
            </div>
            
            <button type="submit" name="enviar" class="popupCards__submit-save saveButton">
              Salvar
            </button>
         </form>
    );
  }
  