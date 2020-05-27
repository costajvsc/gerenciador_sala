class ListAlunos {
    constructor(){
        this._lista = []
    }

    push(aluno)
    {
        this._lista.push(aluno)
    }

    get alunos(){
        return this._lista
    }
}