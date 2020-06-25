class ReservaView{
    constructor(table, modal_title, modal_footer, input_turma, input_sala){
        this._table = table
        this._modal_footer = modal_footer
        this._modal_title = modal_title
        this._input_turma = input_turma
        this._input_sala = input_sala
    }

    _template(model){

        return `
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Data da Reserva</th>
                    <th scope="col">Período</th>
                    <th scope="col">Turma</th>
                    <th scope="col">Sala</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                ${model.map((m) => `
                    <tr>
                        <td>${m.id}</td>
                        <td>${m.dataReserva.getDate()}/${m.dataReserva.getMonth()}/${m.dataReserva.getFullYear()}</td>
                        <td>${m.periodo}</td>
                        <td>${m.turma}</td>
                        <td>${m.sala}</td>
                        <td>
                            <i class="fas fa-pencil-alt text-info ml-2" data-toggle="modal" data-target="#modal" onclick="reserva.fill(${m.id})"></i>
                            <i class="far fa-trash-alt text-danger ml-2" onclick="reserva.delete(${m.id})"></i>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        `
    }
    table_update(model){
        this._table.innerHTML = ''
        this._table.innerHTML = this._template(model)
    }

    modal_update(title, listTurma, listSala, option){
        this._modal_title.innerHTML = title

        listSala.forEach(e => {
            this._factory(this._input_sala, e._id, e._localizacao)
        })

        listTurma.forEach(e => {
            this._factory(this._input_turma, e._id, e._disciplina)
        })
        
        this._modal_footer.innerHTML = `
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

    _factory(element, value, text) {
        let option = document.createElement('option')
        option.value = value
        option.text = text
        element.appendChild(option)
    }
}


