class SalaView{
    constructor(element){
        this._element = element
    }

    _template(model){

        return `
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Localização</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                ${model.map((m) => `
                    <tr>
                        <td>${m.id}</td>
                        <td>${m.localizacao}</td>
                        <td>
                            <i class="fas fa-pencil-alt text-info ml-2" data-toggle="modal" data-target="#modal" onclick="sala.fill(${m.id})"></i>
                            <i class="far fa-trash-alt text-danger ml-2" onclick="sala.delete(${m.id})"></i>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        `
    }
    update(model){
        this._element.innerHTML = ''
        this._element.innerHTML = this._template(model)
    }
}