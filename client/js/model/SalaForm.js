class SalaForm{
    constructor(iId, iLocalizacao){
        this._inputId = iId
        this._inputLocalizacao = iLocalizacao
    }

    clear(){
        this._inputId.value = ''
        this._inputLocalizacao.value = ''
    }
}