
export default function EditProfile() {
    
    return (
        <form className="popup__form form" name="register">
        <h3 className="popup__EditarPerfil">Editar perfil</h3>

       <div className="form__input"> 
            <input
            className="popup__form-name name-input" 
            type="text" 
            placeholder="Nome" 
            name="name" 
            minlength="2" 
            maxlength="40" 
            required/> 
            <span className="form-input-error form__input-name popup__form-name-error"></span>
       </div>

        <div className="form__input">                    
            <input
            className="popup__form-Explorar name-input" 
            type="text" 
            placeholder="Sobre mim" 
            name="explorar" 
            minlength="2" 
            maxlength="200" 
            required/>
            <span className="form-input-error form__input-explorar popup__form-name-error"></span>
        </div>
   
        <button className="popup__submit-save saveButton" type="submit">
            Enviar
        </button>
        
    </form>
  
    )
}