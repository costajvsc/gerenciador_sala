<?php
namespace App\Http\Controllers;

use App\Sala;
use Illuminate\Http\Request;

class SalaController
{
    public function index()
    {
        return Sala::all();
    }

    public function store(Request $request)
    {
        $sala = Sala::create([
            'localizacao' => $request->localizacao]);

        if(empty($sala))
            return response()->json('Erro ao inserir sala', 404);
        
        return response()->json('Sala inserido com sucesso', 201);
    }   

    public function show(int $id_sala)
    {
        $sala = Sala::find($id_sala);        
        
        if(is_null($sala))
            return response()->json('',204);

        return response()->json($sala);
    }

    public function destroy(int $id_sala)
    {
        $qnt = Sala::destroy($id_sala);

        if($qnt === 0)
            return response()->json(['error' => 'Erro ao remover sala'], 404);

        return response()->json('Sala removido com sucesso', 204);
    }   

    public function update(int $id_sala, Request $request)
    {
        $sala = Sala::find($id_sala);

        if(is_null($sala))
            return response()->json('',204);

        $sala->fill($request->all());
        $sala->save();

        return response()->json($sala);
    }
}