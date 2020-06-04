class Sala{
    constructor(id, localizacao){
        this._id = id
        this._localizacao = localizacao
    }

    get id(){
        return this._id
    }

    set id(id){
        this._id = id
    }

    get localizacao(){
        return this._localizacao
    }
    
    set localizacao(localizacao){
        this._localizacao = localizacao
    }
}