class ListTurmas {
    constructor(){
        this._lista = []
    }

    push(turma)
    {
        this._lista.push(turma)
    }

    pop(){
        this._lista = []
    }

    get turmas(){
        return this._lista
    }
}