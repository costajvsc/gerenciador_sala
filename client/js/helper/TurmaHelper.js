class TurmaHelper{
    
    static async load(){
        let lista = new ListTurmas()
        let url = `http://localhost/gerenciador-sala/server/public/api/turmas`

        let turmas = await fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            lista.pop()
            data.forEach(e => lista.push(new Turma(e.id_turma, e.id_turma, e.nome_disciplina, e.id_professor, e.nome_professor)))
            return lista._lista 
        })
        return turmas
    }
}