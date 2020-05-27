class AlunoView{
    constructor(element){
        this._element = element
    }

    _template(model){

        return `
            <thead>
                <tr>
                    <th scope="col">Matricula</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                ${model.map((m) => `
                    <tr>
                        <td>${m.id}</td>
                        <td>${m.nome}</td>
                        <td>${m.email}</td>
                        <td>${m.telefone}</td>
                        <td>
                            <i class="fas fa-pencil-alt text-info ml-2" data-toggle="modal" data-target="#edit" onclick="aluno.fill(${m.id})"></i>
                            <i class="far fa-trash-alt text-danger ml-2" onclick="aluno.delete(${m.id})"></i>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        `
    }
    update(model){
        console.log(model)
        this._element.innerHTML = this._template(model)
    }
}