class ReservaController{
    
    constructor(){
        let $ = document.querySelector.bind(document)
        this._lista = new ListReserva()
        this._view = new ReservaView($('#table_reservas'))
        this._form = new ReservaForm($('#id_reserva'), $('#data_reserva'), $('#periodo'), $('#id_turma'), $('#id_sala'))
        this._modal = $('#modal_footer')
        this.load()
    }

    load(){
        let url = `http://localhost/gerenciador-sala/server/public/api/reservas`

        fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            this._lista.pop()
            data.forEach(e => this._lista.push(new Reserva(e.id_reserva, e.data_reserva, e.periodo, e.id_turma, null, e.id_sala, null)))
            this._view.update(this._lista.reservas)
        })
    }
    
    create(){
        
        let url = `http://localhost/gerenciador-sala/server/public/api/reservas`
        
        let formData = new FormData()
        formData.append('data_reserva', this._form._inputDataReserva.value)
        formData.append('periodo', this._form._inputPeriodo.value)
        formData.append('id_turma', this._form._inputIdTurma.value)
        formData.append('id_sala', this._form._inputIdSala.value)

        fetch(url,{  
            method: 'POST',
            body: formData
        }).then(response => {
            if(response.status == 201){
                swal("Reserva efetuada com sucesso.", {icon: "success"})
                this.load()
            }
            else{
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
            }
        })
    }

    fill(id){
        let url = `http://localhost/gerenciador-sala/server/public/api/reservas/${id}`

        fetch(url,{  
            method: 'GET',
        }).then(response => {
            if(!response.ok){
                swal("Um erro inesperado aconteceu!", {icon: "warning"})
                return
            }
            return response.json()
        }).then(data =>{
            this._form._inputId.value = data.id_reserva
            this._form._inputDataReserva.value = data.data_reserva
            this._form._inputPeriodo.value = data.periodo
            this._form._inputIdTurma.value = data.id_turma
            this._form._inputIdSala.value = data.id_sala
            this._option('update')
        })
    }

    update(){

        let url = `http://localhost/gerenciador-sala/server/public/api/reservas/${this._form._inputId.value}`

        let formData = new FormData()
        formData.append('data_reserva', this._form._inputDataReserva.value)
        formData.append('periodo', this._form._inputPeriodo.value)
        formData.append('id_turma', this._form._inputIdTurma.value)
        formData.append('id_sala', this._form._inputIdSala.value)

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
                let url = `http://localhost/gerenciador-sala/server/public/api/reservas/${id}`

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
        <button type="button" id="submit" class="btn btn-primary" onclick="reserva.${option}()">
            <i class="far fa-save mr-1"></i>
            Salvar
        </button>
        `
    }
}
