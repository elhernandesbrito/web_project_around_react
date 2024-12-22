
export default function EditAvatar() {
   
    return (
        <form className="popupAvatarUpdate__form form" name="register">
            <h3 className="popupAvatarUpdate__name">Alterar a foto do perfil</h3>
            <input 
                className="popupAvatarUpdate__form-link name-input"
                type="url" 
                name="link" 
                placeholder="Link da imagem" 
                require/>
                <span className="form-input-error form__input-link popupAvatarUpdate__form-link-error"></span>
                <button 
                type="submit" 
                name="enviar" 
                className="popupAvatarUpdate__submit-save saveButton">
                    SALVAR
                </button>
        </form>
    );
}