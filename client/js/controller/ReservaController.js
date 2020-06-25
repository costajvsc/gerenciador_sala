class ReservaController{
    
    constructor(){
        let $ = document.querySelector.bind(document)
        this._lista = new ListReserva()
        this._form = new ReservaForm($('#id_reserva'), $('#data_reserva'), $('#periodo'), $('#id_turma'), $('#id_sala'))
        this._view = new ReservaView($('#table_reservas'), $('#modal-title'), $('#modal-footer'), this._form._inputIdTurma, this._form._inputIdSala)
        this.load()
        this._salas  
        SalaHelper.load().then(sala => this._salas = sala)
        this._turmas  
        TurmaHelper.load().then(turmas => this._turmas = turmas)
    }

    load(){
        let url = `http://localhost/gerenciador-sala/server/public/api/reservas`

        fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            this._lista.pop()
            data.forEach(e => this._lista.push(new Reserva(e.id_reserva, e.data_reserva, e.periodo, e.id_turma, e.nome_disciplina, e.id_sala, e.localizacao)))
            this._view.table_update(this._lista.reservas)
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
        this._form.clear()
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
            let date = new Date(data.data_reserva)
            this._form._inputDataReserva.value = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
            this._form._inputPeriodo.value = data.periodo
            this._form._inputIdTurma.value = data.id_turma
            this._form._inputIdSala.value = data.id_sala
            this._view.modal_update('Atualizar', this._turmas, this._salas, 'update')
            
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
        this._form.clear()
        this._view.modal_update('Adicionar', this._turmas, this._salas, 'create')
    }
}
