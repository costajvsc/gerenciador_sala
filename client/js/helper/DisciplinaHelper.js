class DisciplinaHelper{

    static async load(){
        let lista = new ListDisciplinas()
        let url = `http://localhost/gerenciador-sala/server/public/api/disciplinas`

        let alunos = await fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            lista.pop()
            data.forEach(e => lista.push(new Disciplina(e.id_disciplina, e.nome_disciplina)))
            return lista._lista
        })
        
        return alunos
    }
}