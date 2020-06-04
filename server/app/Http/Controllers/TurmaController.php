<?php
namespace App\Http\Controllers;

use App\Turma;
use Illuminate\Http\Request;

class TurmaController
{
    public function index()
    {
        return Turma::all();
    }

    public function store(Request $request)
    {
        $turma = Turma::create([
            'id_disciplina' => $request->id_disciplina,
            'id_professor' => $request->id_professor]);

        if(empty($turma))
            return response()->json('Erro ao inserir turma', 404);
        
        return response()->json('Turma inserido com sucesso', 201);
    }   

    public function show(int $id_turma)
    {
        $turma = Turma::find($id_turma);        
        
        if(is_null($turma))
            return response()->json('',204);

        return response()->json($turma);
    }

    public function destroy(int $id_turma)
    {
        $qnt = Turma::destroy($id_turma);

        if($qnt === 0)
            return response()->json(['error' => 'Erro ao remover turma'], 404);

        return response()->json('Turma removido com sucesso', 204);
    }   

    public function update(int $id_turma, Request $request)
    {
        $turma = Turma::find($id_turma);

        if(is_null($turma))
            return response()->json('',204);

        $turma->fill($request->all());
        $turma->save();

        return response()->json($turma);
    }
}