class DisciplinaController{
    
    constructor(){
        let $ = document.querySelector.bind(document)
        this._lista = new ListDisciplinas()
        this._view = new DisciplinaView($('#table_disciplina'))
        this._form = new DisciplinaForm($('#id_disciplina'), $('#nome_disciplina'))
        this._modal = $('#modal_footer')
        this.load()
    }

    load(){
        let url = `http://localhost/gerenciador-sala/server/public/api/disciplinas`

        fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            this._lista.pop()
            data.forEach(e => this._lista.push(new Disciplina(e.id_disciplina, e.nome_disciplina)))
            this._view.update(this._lista.disciplinas)
        })
    }
    
    create(){
        
        let url = `http://localhost/gerenciador-sala/server/public/api/disciplinas`
        
        let formData = new FormData()
        formData.append('nome_disciplina', this._form._inputNome.value)

        fetch(url,{  
            method: 'POST',
            body: formData
        }).then(response => {
            if(response.status == 201){
                swal("Disciplina inserido com sucesso.", {icon: "success"})
                this.load()
            }
            else{
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
            }
        })
    }

    fill(id){
        let url = `http://localhost/gerenciador-sala/server/public/api/disciplinas/${id}`

        fetch(url,{  
            method: 'GET',
        }).then(response => {
            if(!response.ok){
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
                return
            }
            return response.json()
        }).then(data =>{
            this._form._inputId.value = data.id_disciplina
            this._form._inputNome.value = data.nome_disciplina
            this._option('update')
        })
    }

    update(){

        let url = `http://localhost/gerenciador-sala/server/public/api/disciplinas/${this._form._inputId.value}`

        let formData = new FormData()
        formData.append('nome_disciplina', this._form._inputNome.value)

        fetch(url,{  
            method: 'PUT',
            body: formData
        }).then(response => {
            if(response.status == 200){
                console.log(response)
                swal("Disciplina alterado com sucesso.", {icon: "success"})
                this.load()
            }
            else{
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
            }
        })
    }
    delete(id){
        
        swal({
            title: `Deseja realmente excluir a disciplina ${id}?`,
            text: `Uma vez deletado a disciplina não estará mais disponível`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) 
            {
                let url = `http://localhost/gerenciador-sala/server/public/api/disciplinas/${id}`

                fetch(url,{   method: 'DELETE' }
                ).then(response => {
                    if(response.ok)
                    {
                        swal("Disciplina deletado com sucesso.", {icon: "success"})
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
        <button type="button" id="submit" class="btn btn-primary" onclick="disciplina.${option}()">
            <i class="far fa-save mr-1"></i>
            Salvar
        </button>
        `
    }
}
