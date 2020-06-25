class ChamadaForm{
    constructor(iId, iIdTurma, iIdAluno){
        this._inputId = iId
        this._inputIdTurma = iIdTurma
        this._inputIdAluno = iIdAluno
    }

    clear(){
        this._inputId.value = ''
        this._inputIdTurma.innerHTML = "<option value='' selected=''>Selecione uma opção</option>"
        this._inputIdAluno.innerHTML = "<option value='' selected=''>Selecione uma opção</option>"
    }
}