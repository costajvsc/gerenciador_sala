class ListReserva {
    constructor(){
        this._lista = []
    }

    push(reserva)
    {
        this._lista.push(reserva)
    }

    pop(){
        this._lista = []
    }

    get reservas(){
        return this._lista
    }
}