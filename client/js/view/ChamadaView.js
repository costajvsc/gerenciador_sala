class ChamadaView{
    constructor(element, modal_title, modal_footer, input_turma, input_aluno){
        this._element = element
        this._modal_footer = modal_footer
        this._modal_title = modal_title
        this._input_turma = input_turma
        this._input_aluno = input_aluno
    }

    _template(model){

        return `
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Turma</th>
                    <th scope="col">Aluno</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                ${model.map((m) => `
                    <tr>
                        <td>${m.id}</td>
                        <td>${m.turma}</td>
                        <td>${m.aluno}</td>
                        <td>
                            <i class="fas fa-pencil-alt text-info ml-2" data-toggle="modal" data-target="#modal" onclick="chamada.fill(${m.id})"></i>
                            <i class="far fa-trash-alt text-danger ml-2" onclick="chamada.delete(${m.id})"></i>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        `
    }
    table_update(model){
        this._element.innerHTML = ''
        this._element.innerHTML = this._template(model)
    }
    modal_update(title, listTurma, listAlunos, option){
        this._modal_title.innerHTML = title

        listTurma.forEach(e => {
            this._factory(this._input_turma, e._id, e._disciplina)
        })

        listAlunos.forEach(e => {
            this._factory(this._input_aluno, e._id, e._nome)
        })
        
        this._modal_footer.innerHTML = `
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

    _factory(element, value, text) {
        let option = document.createElement('option')
        option.value = value
        option.text = text
        element.appendChild(option)
    }
}