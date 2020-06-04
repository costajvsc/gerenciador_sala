class ChamadaForm{
    constructor(iId, iIdTurma, iIdAluno){
        this._inputId = iId
        this._inputIdTurma = iIdTurma
        this._inputIdAluno = iIdAluno
    }

    clear(){
        this._inputId.value = ''
        this._inputNome.value = ''
    }
}