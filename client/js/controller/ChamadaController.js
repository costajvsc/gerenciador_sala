class ChamadaController{
    
    constructor(){
        let $ = document.querySelector.bind(document)
        this._lista = new ListChamada()
        this._form = new ChamadaForm($('#id_chamada'), $('#id_turma'), $('#id_aluno'))
        this._view = new ChamadaView($('#table_chamadas'), $('#modal-title'), $('#modal_footer'), this._form._inputIdTurma, this._form._inputIdAluno)
        this._modal = $('#modal_footer')
        this.load()
        this._alunos  
        AlunoHelper.load().then(aluno => this._alunos = aluno)
        this._turmas  
        TurmaHelper.load().then(turmas => this._turmas = turmas)
    }

    load(){
        let url = `http://localhost/gerenciador-sala/server/public/api/chamadas`

        fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            this._lista.pop()
            data.forEach(e => this._lista.push(new Chamada(e.id_chamada, e.id_turma, e.nome_disciplina, e.id_aluno, e.nome_aluno)))
            this._view.table_update(this._lista.chamadas)
        })
    }
    
    create(){
        let url = `http://localhost/gerenciador-sala/server/public/api/chamadas`
        
        let formData = new FormData()
        formData.append('id_turma', this._form._inputIdTurma.value)
        formData.append('id_aluno', this._form._inputIdAluno.value)

        fetch(url,{  
            method: 'POST',
            body: formData
        }).then(response => {
            if(response.status == 201){
                swal("Chamada inserido com sucesso.", {icon: "success"})
                this.load()
            }
            else{
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
            }
        })
    }

    fill(id){
        this._form.clear()
        let url = `http://localhost/gerenciador-sala/server/public/api/chamadas/${id}`

        fetch(url,{  
            method: 'GET',
        }).then(response => {
            if(!response.ok){
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
                return
            }
            return response.json()
        }).then(data =>{
            this._form._inputId.value = id
            this._form._inputIdTurma.value = data.id_turma
            this._form._inputIdTurma.text = data.nome_disciplina
            this._form._inputIdAluno.value = data.id_turma
            this._form._inputIdAluno.text = data.nome_aluno
            this._view.modal_update('Atualizar', this._turmas, this._alunos, 'update')
        })
    }

    update(){

        let url = `http://localhost/gerenciador-sala/server/public/api/chamadas/${this._form._inputId.value}`

        let formData = new FormData()
        formData.append('id_turma', this._form._inputIdTurma.value)
        formData.append('id_aluno', this._form._inputIdAluno.value)
        fetch(url,{  
            method: 'PUT',
            body: formData
        }).then(response => {
            if(response.status == 200){
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
                let url = `http://localhost/gerenciador-sala/server/public/api/chamadas/${id}`

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
        this._view.modal_update('Adicionar', this._turmas, this._alunos, 'create')
    }

}
