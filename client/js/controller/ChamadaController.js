class ChamadaController{
    
    constructor(){
        let $ = document.querySelector.bind(document)
        this._lista = new ListChamada()
        this._view = new ChamadaView($('#table_chamadas'))
        this._form = new ChamadaForm($('#id_chamada'), $('#id_turma'), $('#id_aluno'))
        this._modal = $('#modal_footer')
        this.load()
    }

    load(){
        let url = `http://localhost/gerenciador-sala/server/public/api/chamadas`

        fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            this._lista.pop()
            data.forEach(e => this._lista.push(new Chamada(e.id_chamada, e.id_turma, null, e.id_aluno, null)))
            this._view.update(this._lista.chamadas)
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
            this._form._inputId.value = data.id_chamada
            this._form._inputIdTurma.value = data.id_turma
            this._form._inputIdAluno.value = data.id_turma
            this._option('update')
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
        this._option('create')
        this._form.clear()
    }

    _option(option){
        this._modal.innerHTML = `
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
            <i class="fas fa-times mr-1"></i>
            Fechar
        </button>
        <button type="button" id="submit" class="btn btn-primary" onclick="chamada.${option}()">
            <i class="far fa-save mr-1"></i>
            Salvar
        </button>
        `
    }
}
