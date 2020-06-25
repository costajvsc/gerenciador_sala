class AlunoHelper{

    static async load(){
        let lista = new ListAlunos()
        let url = `http://localhost/gerenciador-sala/server/public/api/alunos`

        let alunos = await fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            lista.pop()
            data.forEach(e => lista.push(new Aluno(e.id_aluno, e.nome_aluno, e.email_aluno, e.telefone)))
            return lista._lista
        })
        
        return alunos
    }
}