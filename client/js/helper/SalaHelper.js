class SalaHelper{

    static async load(){
        let lista = new ListSalas()
        let url = `http://localhost/gerenciador-sala/server/public/api/salas`

        let salas = await fetch(url,{ method: 'GET' }).then(response => {return response.json()})
        .then(data =>
        {
            lista.pop()
            data.forEach(e => lista.push(new Sala(e.id_sala, e.localizacao)))
            return lista._lista
        })
        return salas
    }
}