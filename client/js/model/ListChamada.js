class ListChamada {
    constructor(){
        this._lista = []
    }

    push(chamada)
    {
        this._lista.push(chamada)
    }

    pop(){
        this._lista = []
    }

    get chamadas(){
        return this._lista
    }
}