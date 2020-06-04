class ReservaForm{
    constructor(iId, iDataReserva, iPeriodo, iIdTurma, iIdSala){
        this._inputId = iId
        this._inputDataReserva = iDataReserva
        this._inputPeriodo = iPeriodo
        this._inputIdTurma = iIdTurma
        this._inputIdSala = iIdSala

    }

    clear(){
        this._inputId.value = ''
        this._inputNome.value = ''
    }
}