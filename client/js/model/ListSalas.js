class ListSalas {
    constructor(){
        this._lista = []
    }

    push(sala)
    {
        this._lista.push(sala)
    }

    pop(){
        this._lista = []
    }

    get salas(){
        return this._lista
    }
}