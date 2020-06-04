class Turma{
    constructor(id, id_disciplina, disciplina, id_professor, professor){
        this._id = id
        this._id_disciplina = id_disciplina
        this._disciplina = disciplina
        this._id_professor = id_professor
        this._professor = professor
    }

    get id(){
        return this._id
    }

    set id(id){
        this._id = id
    }

    get id_disciplina(){
        return this._id_disciplina
    }
    
    set id_disciplina(id_disciplina){
        this._id_disciplina = id_disciplina
    }

    get disciplina(){
        return this._disciplina
    }
    
    set disciplina(disciplina){
        this._disciplina = disciplina
    }

    
    get id_professor(){
        return this._id_professor
    }
    
    set id_professor(id_professor){
        this._id_professor = id_professor
    }

    get professor(){
        return this._professor
    }
    
    set professor(professor){
        this._professor = professor
    }
}