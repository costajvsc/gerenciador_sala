class TurmaController{
    
    constructor(){
        let $ = document.querySelector.bind(document)
        this._lista = new ListTurmas()
        this._form = new TurmaForm($('#id_turma'), $('#id_disciplinas'), $('#id_professor'))
        this._view = new TurmaView($('#table_turmas'), $('#modal_title'), $('#modal_footer'), this._form._inputIdDisciplina, this._form._inputIdProfessor)
        this._modal = $('#modal_footer')
        this.load()
        this._disciplinas  
        DisciplinaHelper.load().then(disciplina => this._disciplinas = disciplina)
        this._professors  
        ProfessorHelper.load().then(professor => this._professors = professor)
    }

    load(){
        let url = `http://localhost/gerenciador-sala/server/public/api/turmas`

        fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            this._lista.pop()
            data.forEach(e => this._lista.push(new Turma(e.id_turma, e.id_turma, e.nome_disciplina, e.id_professor, e.nome_professor)))
            this._view.table_update(this._lista.turmas)
        })
    }
    
    create(){
        
        let url = `http://localhost/gerenciador-sala/server/public/api/turmas`
        
        let formData = new FormData()
        formData.append('id_disciplina', this._form._inputIdDisciplina.value)
        formData.append('id_professor', this._form._inputIdProfessor.value)

        fetch(url,{  
            method: 'POST',
            body: formData
        }).then(response => {
            if(response.status == 201){
                swal("Sala inserido com sucesso.", {icon: "success"})
                this.load()
            }
            else{
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
            }
        })
    }

    fill(id){
        let url = `http://localhost/gerenciador-sala/server/public/api/turmas/${id}`

        fetch(url,{  
            method: 'GET',
        }).then(response => {
            if(!response.ok){
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
                return
            }
            return response.json()
        }).then(data =>{
            this._form._inputIdDisciplina.value = data.id_disciplina
            this._form._inputIdDisciplina.value = data.id_professor
            this._form._inputId.value = id
            this._view.modal_update('Atualizar', this._disciplinas, this._professors, 'update')
        })
    }

    update(){

        let url = `http://localhost/gerenciador-sala/server/public/api/turmas/${this._form._inputId.value}`

        let formData = new FormData()
        formData.append('id_disciplina', this._form._inputIdDisciplina.value)
        formData.append('id_professor', this._form._inputIdDisciplina.value)

        fetch(url,{  
            method: 'PUT',
            body: formData
        }).then(response => {
            if(response.status == 200){
                console.log(response)
                swal("Sala alterado com sucesso.", {icon: "success"})
                this.load()
            }
            else{
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
            }
        })
    }
    delete(id){
        
        swal({
            title: `Deseja realmente excluir a sala ${id}?`,
            text: `Uma vez deletado a sala não estará mais disponível`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) 
            {
                let url = `http://localhost/gerenciador-sala/server/public/api/turmas/${id}`

                fetch(url,{   method: 'DELETE' }
                ).then(response => {
                    if(response.ok)
                    {
                        swal("Sala deletado com sucesso.", {icon: "success"})
                        this.load()
                        return;
                    }
                    swal("Um erro inesperado aconteceu!", {icon: "warning"})
                })
            }
            else
            {
                swal("Operação cancelada!")
            }
        })
    }

    clearForm(){
        this._form.clear()
        this._view.modal_update('Adicionar', this._disciplinas, this._professors, 'create')
    }
}
