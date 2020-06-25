<?php
namespace App\Http\Controllers;

use App\Chamada;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ChamadaController
{
    public function index()
    {
        $json =  DB::table('chamadas')
                    ->join('turmas', 'chamadas.id_turma', '=', 'turmas.id_turma')
                    ->join('alunos', 'chamadas.id_aluno', '=', 'alunos.id_aluno')
                    ->join('disciplinas', 'turmas.id_disciplina', '=', 'disciplinas.id_disciplina')
                    ->select('chamadas.id_chamada','chamadas.id_turma','chamadas.id_aluno', 'disciplinas.nome_disciplina', 'alunos.nome_aluno')->get();

        $json = json_encode($json);
        return $json;
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
        $chamada = DB::table('chamadas')
        ->join('turmas', 'chamadas.id_turma', '=', 'turmas.id_turma')
        ->join('alunos', 'chamadas.id_aluno', '=', 'alunos.id_aluno')
        ->join('disciplinas', 'turmas.id_disciplina', '=', 'disciplinas.id_disciplina')
        ->select('chamadas.id_chamada','chamadas.id_turma','chamadas.id_aluno', 'disciplinas.nome_disciplina', 'alunos.nome_aluno')
        ->where('chamadas.id_chamada', '=', "{$id_chamada}")
        ->get();   
        
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