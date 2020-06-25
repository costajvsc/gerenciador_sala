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
        this._inputDataReserva.value = ''
        this._inputIdTurma.innerHTML = "<option value='' selected=''>Selecione uma opção</option>"
        this._inputIdSala.innerHTML = "<option value='' selected=''>Selecione uma opção</option>"
    }
}

