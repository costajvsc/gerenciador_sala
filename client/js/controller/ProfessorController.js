class ProfessorController{
    
    constructor(){
        let $ = document.querySelector.bind(document)
        this._lista = new ListProfessors()
        this._view = new ProfessorView($('#table_professors'))
        this._form = new ProfessorForm($('#id_professor'), $('#nome_professor'), $('#email_professor'))
        this._modal = $('#modal_footer')
        this.load()
    }

    load(){
        let url = `http://localhost/gerenciador-sala/server/public/api/professors`

        fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            this._lista.pop()
            data.forEach(e => this._lista.push(new Professor(e.id_professor, e.nome_professor, e.email_professor)))
            this._view.update(this._lista.professors)
        })
    }
    
    create(){
        
        let url = `http://localhost/gerenciador-sala/server/public/api/professors`
        
        let formData = new FormData()
        formData.append('nome_professor', this._form._inputNome.value)
        formData.append('email_professor', this._form._inputEmail.value)

        fetch(url,{  
            method: 'POST',
            body: formData
        }).then(response => {
            if(response.status == 201){
                swal("Professor inserido com sucesso.", {icon: "success"})
                this.load()
            }
            else{
                swal("Um erro inesperado aconteceu!", {icon: "warning"})

            }
        })
    }

    fill(id){
        let url = `http://localhost/gerenciador-sala/server/public/api/professors/${id}`

        fetch(url,{  
            method: 'GET',
        }).then(response => {
            if(!response.ok){
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
                return
            }
            return response.json()
        }).then(data =>{
            this._form._inputId.value = data.id_professor
            this._form._inputNome.value = data.nome_professor
            this._form._inputEmail.value = data.email_professor
            this._option('update')
        })
    }

    update(){

        let url = `http://localhost/gerenciador-sala/server/public/api/professors/${this._form._inputId.value}`

        let formData = new FormData()
        formData.append('nome_professor', this._form._inputNome.value)
        formData.append('email_professor', this._form._inputEmail.value)

        fetch(url,{  
            method: 'PUT',
            body: formData
        }).then(response => {
            if(response.status == 200){
                console.log(response)
                swal("Professor alterado com sucesso.", {icon: "success"})
                this.load()
            }
            else{
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
            }
        })
    }
    delete(id){
        
        swal({
            title: `Deseja realmente excluir o professor ${id}?`,
            text: `Uma vez deletado o professor não estará mais disponível`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) 
            {
                let url = `http://localhost/gerenciador-sala/server/public/api/professors/${id}`

                fetch(url,{   method: 'DELETE' }
                ).then(response => {
                    if(response.ok)
                    {
                        swal("Professor deletado com sucesso.", {icon: "success"})
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
        <button type="button" id="submit" class="btn btn-primary" onclick="professor.${option}()">
            <i class="far fa-save mr-1"></i>
            Salvar
        </button>
        `
    }
}
