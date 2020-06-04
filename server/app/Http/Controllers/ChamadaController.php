<?php
namespace App\Http\Controllers;

use App\Chamada;
use Illuminate\Http\Request;

class ChamadaController
{
    public function index()
    {
        return Chamada::all();
    }

    public function store(Request $request)
    {
        $chamada = Chamada::create([
            'id_turma' => $request->id_turma,
            'id_aluno' => $request->id_aluno]);

        if(empty($chamada))
            return response()->json('Erro ao inserir na chamada', 404);
        
        return response()->json('Chamada criada com sucesso', 201);
    }   

    public function show(int $id_chamada)
    {
        $chamada = Chamada::find($id_chamada);        
        
        if(is_null($chamada))
            return response()->json('',204);

        return response()->json($chamada);
    }

    public function destroy(int $id_chamada)
    {
        $qnt = Chamada::destroy($id_chamada);

        if($qnt === 0)
            return response()->json(['error' => 'Erro ao remover chamada'], 404);

        return response()->json('Chamada removido com sucesso', 204);
    }   

    public function update(int $id_chamada, Request $request)
    {
        $chamada = Chamada::find($id_chamada);

        if(is_null($chamada))
            return response()->json('',204);

        $chamada->fill($request->all());
        $chamada->save();

        return response()->json($chamada);
    }
}