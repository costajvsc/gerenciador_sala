class ListProfessors {
    constructor(){
        this._lista = []
    }

    push(professor)
    {
        this._lista.push(professor)
    }

    pop(){
        this._lista = []
    }

    get professors(){
        return this._lista
    }
}