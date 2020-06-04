<?php
namespace App\Http\Controllers;

use App\Disciplina;
use Illuminate\Http\Request;

class DisciplinaController
{
    public function index()
    {
        return Disciplina::all();
    }

    public function store(Request $request)
    {
        $disciplina = Disciplina::create([
            'nome_disciplina' => $request->nome_disciplina]);

        if(empty($disciplina))
            return response()->json('Erro ao inserir disciplina', 404);
        
        return response()->json('Disciplina inserido com sucesso', 201);
    }   

    public function show(int $id_disciplina)
    {
        $disciplina = Disciplina::find($id_disciplina);        
        
        if(is_null($disciplina))
            return response()->json('',204);

        return response()->json($disciplina);
    }

    public function destroy(int $id_disciplina)
    {
        $qnt = Disciplina::destroy($id_disciplina);

        if($qnt === 0)
            return response()->json(['error' => 'Erro ao remover disciplina'], 404);

        return response()->json('Disciplina removido com sucesso', 204);
    }   

    public function update(int $id_disciplina, Request $request)
    {
        $disciplina = Disciplina::find($id_disciplina);

        if(is_null($disciplina))
            return response()->json('',204);

        $disciplina->fill($request->all());
        $disciplina->save();

        return response()->json($disciplina);
    }
}