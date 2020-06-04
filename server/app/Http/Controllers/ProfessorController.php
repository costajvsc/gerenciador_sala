<?php
namespace App\Http\Controllers;

use App\Professor;
use Illuminate\Http\Request;

class ProfessorController
{
    public function index()
    {
        return Professor::all();
    }

    public function store(Request $request)
    {
        $professor = Professor::create([
            'nome_professor' => $request->nome_professor,
            'email_professor' => $request->email_professor]);

        if(empty($professor))
            return response()->json('Erro ao inserir professor', 404);
        
        return response()->json('Professor inserido com sucesso', 201);
    }   

    public function show(int $id_professor)
    {
        $professor = Professor::find($id_professor);        
        
        if(is_null($professor))
            return response()->json('',204);

        return response()->json($professor);
    }

    public function destroy(int $id_professor)
    {
        $qnt = Professor::destroy($id_professor);

        if($qnt === 0)
            return response()->json(['error' => 'Erro ao remover professor'], 404);

        return response()->json('Professor removido com sucesso', 204);
    }   

    public function update(int $id_professor, Request $request)
    {
        $professor = Professor::find($id_professor);

        if(is_null($professor))
            return response()->json('',204);

        $professor->fill($request->all());
        $professor->save();

        return response()->json($professor);
    }
}