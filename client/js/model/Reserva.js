class Reserva{
    constructor(id, dataReserva, periodo, idTurma, turma, idSala, sala){
        this._id = id
        this._dataReserva = dataReserva
        this._periodo = periodo
        this._idTurma = idTurma
        this._turma = turma
        this._idSala = idSala
        this._sala = sala
    }

    get id(){
        return this._id
    }

    set id(id){
        this._id = id
    }

    get dataReserva(){
        return this._dataReserva
    }
    
    set dataReserva(dataReserva){
        this._dataReserva = dataReserva
    }

    get periodo(){
        return this._periodo
    }
    
    set periodo(periodo){
        this._periodo = periodo
    }

    get idTurma(){
        return this._idTurma
    }
    
    set idTurma(idTurma){
        this._idTurma = idTurma
    }

    get turma(){
        return this._turma
    }
    
    set turma(turma){
        this._turma = turma
    }

    get idSala(){
        return this._idSala
    }
    
    set idSala(idSala){
        this._idSala = idSala
    }

    get sala(){
        return this._sala
    }
    
    set sala(sala){
        this._sala = sala
    }
}