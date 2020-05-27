class AlunoController{
    
    constructor(){
        let $ = document.querySelector.bind(document)
        this._table = $('#table-alunos')
        this._lista = new ListAlunos()
        this._view = new AlunoView(this._table)
        this.load()
    }

    load(){
        let url = `http://localhost:8000/api/alunos`

        fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            console.log(data)
            data.forEach(e => this._lista.push(new Aluno(e.id_aluno, e.nome_aluno, e.email_aluno, e.telefone)))
            console.log(this._lista.alunos)
            this._view.update(this._lista.alunos)
        })
    }
    

    fill(id){
        alert(`Fill ${id}`)
    }

    delete(id){
        alert(`Delete ${id}`)
    }
}

