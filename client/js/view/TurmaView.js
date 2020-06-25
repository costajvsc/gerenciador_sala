class TurmaView{
    constructor(element, modal_title, modal_footer, input_disciplina, input_professor){
        this._element = element
        this._modal_footer = modal_footer
        this._modal_title = modal_title
        this._input_disciplina = input_disciplina
        this._input_professor = input_professor
    }

    _template(model){

        return `
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Disciplina</th>
                    <th scope="col">Professor</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                ${model.map((m) => `
                    <tr>
                        <td>${m.id}</td>
                        <td>${m.disciplina}</td>
                        <td>${m.professor}</td>
                        <td>
                            <i class="fas fa-pencil-alt text-info ml-2" data-toggle="modal" data-target="#modal" onclick="turma.fill(${m.id})"></i>
                            <i class="far fa-trash-alt text-danger ml-2" onclick="turma.delete(${m.id})"></i>
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

    modal_update(title, listDisciplina, listProfessor, option){
        this._modal_title.innerHTML = title

        listDisciplina.forEach(e => {
            this._factory(this._input_disciplina, e._id, e._nome)
        })

        listProfessor.forEach(e => {
            this._factory(this._input_professor, e._id, e._nome)
        })
        
        this._modal_footer.innerHTML = `
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
            <i class="fas fa-times mr-1"></i>
            Fechar
        </button>
        <button type="button" id="submit" class="btn btn-primary" onclick="turma.${option}()">
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