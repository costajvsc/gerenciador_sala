class ListDisciplinas {
    constructor(){
        this._lista = []
    }

    push(disciplina)
    {
        this._lista.push(disciplina)
    }

    pop(){
        this._lista = []
    }

    get disciplinas(){
        return this._lista
    }
}