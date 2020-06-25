class ProfessorHelper{

    static async load(){
        let lista = new ListDisciplinas()
        let url = `http://localhost/gerenciador-sala/server/public/api/professors`

        let professors = await fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            lista.pop()
            data.forEach(e => lista.push(new Professor(e.id_professor, e.nome_professor, e.email_professor)))
            return lista._lista
        })
        
        return professors
    }
}