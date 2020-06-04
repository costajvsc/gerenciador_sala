class AlunoForm{
    constructor(iId, iNome, iEmail, iTelefone){
        this._inputId = iId
        this._inputNome = iNome
        this._inputEmail = iEmail
        this._inputTelefone = iTelefone
    }

    clear(){
        this._inputId.value = ''
        this._inputNome.value = ''
        this._inputEmail.value = ''
        this._inputTelefone.value = ''
    }
}