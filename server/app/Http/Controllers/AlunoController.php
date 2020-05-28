<?php
namespace App\Http\Controllers;

use App\Aluno;
use Illuminate\Http\Request;

class ALunoController
{
    public function index()
    {
        return Aluno::all();
    }

    public function store(Request $request)
    {
        $aluno = Aluno::create([
            'nome_aluno' => $request->nome_aluno,
            'email_aluno' => $request->email_aluno,
            'telefone' => $request->telefone]);

        if(empty($aluno))
            return response()->json('Erro ao inserir aluno', 404);
        
        return response()->json('Aluno inserido com sucesso', 201);
    }   

    public function show(int $id_aluno)
    {
        $aluno = Aluno::find($id_aluno);        
        
        if(is_null($aluno))
            return response()->json('',204);

        return response()->json($aluno);
    }

    public function destroy(int $id_aluno)
    {
        $qnt = Aluno::destroy($id_aluno);

        if($qnt === 0)
            return response()->json(['error' => 'Erro ao remover aluno'], 404);

        return response()->json('Aluno removido com sucesso', 204);
    }   

    public function update(int $id_aluno, Request $request)
    {
        $aluno = Aluno::find($id_aluno);

        if(is_null($aluno))
            return response()->json('',204);

        $aluno->fill($request->all());
        $aluno->save();

        return response()->json($aluno);
    }
}