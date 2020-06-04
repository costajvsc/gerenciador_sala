class DisciplinaForm{
    constructor(iId, iNome){
        this._inputId = iId
        this._inputNome = iNome
    }

    clear(){
        this._inputId.value = ''
        this._inputNome.value = ''
    }
}