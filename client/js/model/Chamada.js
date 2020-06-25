class Chamada{
    constructor(id, id_turma, turma, id_aluno, aluno){
        this._id = id
        this._id_turma = id_turma
        this._turma = turma
        this._id_aluno = id_aluno
        this._aluno = aluno
    }

    get id(){
        return this._id
    }

    set id(id){
        this._id = id
    }

    get id_turma(){
        return this._id_turma
    }
    
    set id_turma(id_turma){
        this._id_turma = id_turma
    }

    get aluno(){
        return this._aluno
    }
    
    set aluno(aluno){
        this._aluno = aluno
    }

    get turma(){
        return this._turma
    }
    
    set turma(turma){
        this._turma = turma
    }

    get aluno(){
        return this._aluno
    }

    set aluno(aluno){
        this._aluno = aluno
    }
}