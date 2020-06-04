class ProfessorForm{
    constructor(iId, iNome, iEmail){
        this._inputId = iId
        this._inputNome = iNome
        this._inputEmail = iEmail
    }

    clear(){
        this._inputId.value = ''
        this._inputNome.value = ''
        this._inputEmail.value = ''
    }
}