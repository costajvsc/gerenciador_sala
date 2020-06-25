class AlunoController{
    
    constructor(){
        let $ = document.querySelector.bind(document)
        this._lista = new ListAlunos()
        this._view = new AlunoView($('#table_alunos'))
        this._form = new AlunoForm($('#id_aluno'), $('#nome_aluno'), $('#email_aluno'), $('#telefone_aluno'))
        this._modal = $('#modal_footer')
        this.load()
    }

    load(){
        let url = `http://localhost/gerenciador-sala/server/public/api/alunos`

        fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            this._lista.pop()
            data.forEach(e => this._lista.push(new Aluno(e.id_aluno, e.nome_aluno, e.email_aluno, e.telefone)))
            this._view.update(this._lista.alunos)
        })
    }
    
    create(){
        
        let url = `http://localhost/gerenciador-sala/server/public/api/alunos`
        
        let formData = new FormData()
        formData.append('nome_aluno', this._form._inputNome.value)
        formData.append('email_aluno', this._form._inputEmail.value)
        formData.append('telefone', this._form._inputTelefone.value)

        fetch(url,{  
            method: 'POST',
            body: formData
        }).then(response => {
            if(response.status == 201){
                swal("Aluno inserido com sucesso.", {icon: "success"})
                this.load()
            }
            else{
                swal("Um erro inesperado aconteceu!", {icon: "warning"})

            }
        })
    }

    fill(id){
        let url = `http://localhost/gerenciador-sala/server/public/api/alunos/${id}`

        fetch(url,{  
            method: 'GET',
        }).then(response => {
            if(!response.ok){
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
                return
            }
            return response.json()
        }).then(data =>{
            this._form._inputId.value = data.id_aluno
            this._form._inputNome.value = data.nome_aluno
            this._form._inputEmail.value = data.email_aluno
            this._form._inputTelefone.value = data.telefone
            this._option('update')
        })
    }

    update(){
        let url = `http://localhost/gerenciador-sala/server/public/api/alunos/${this._form._inputId.value}`

        let formData = new FormData()
        formData.append('nome_aluno', this._form._inputNome.value)
        formData.append('email_aluno', this._form._inputEmail.value)
        formData.append('telefone', this._form._inputTelefone.value)

        fetch(url,{  
            method: 'PUT',
            body: formData
        }).then(response => {
            if(response.status == 200){
                console.log(response)
                swal("Aluno alterado com sucesso.", {icon: "success"})
                this.load()
            }
            else{
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
            }
        })
    }
    delete(id){
        
        swal({
            title: `Deseja realmente excluir o aluno ${id}?`,
            text: `Uma vez deletado o aluno não estará mais disponível`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) 
            {
                let url = `http://localhost/gerenciador-sala/server/public/api/alunos/${id}`

                fetch(url,{   method: 'DELETE' }
                ).then(response => {
                    if(response.ok)
                    {
                        swal("Aluno deletado com sucesso.", {icon: "success"})
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
        this._option('create')
        this._form.clear()
    }

    _option(option){
        this._modal.innerHTML = `
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
            <i class="fas fa-times mr-1"></i>
            Fechar
        </button>
        <button type="button" id="submit" class="btn btn-primary" onclick="aluno.${option}()">
            <i class="far fa-save mr-1"></i>
            Salvar
        </button>
        `
    }
}
