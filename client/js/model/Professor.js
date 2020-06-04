class Professor{
    constructor(id, nome, email){
        this._id = id
        this._nome = nome
        this._email = email
    }

    get id(){
        return this._id
    }

    set id(id){
        this._id = id
    }

    get nome(){
        return this._nome
    }
    
    set nome(nome){
        this._nome = nome
    }

    get email(){
        return this._email
    }

    set email(email){
        this._email = email
    }
}