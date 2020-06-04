class TurmaForm{
    constructor(iId, iIdDisciplina, iIdProfessor){
        this._inputId = iId
        this._inputIdDisciplina = iIdDisciplina
        this._inputIdProfessor = iIdProfessor
    }

    clear(){
        this._inputId.value = ''
        this._inputNome.value = ''
    }
}