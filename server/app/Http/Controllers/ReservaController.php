<?php
namespace App\Http\Controllers;

use App\Reserva;
use Illuminate\Http\Request;

class ReservaController
{
    public function index()
    {
        return Reserva::all();
    }

    public function store(Request $request)
    {
        $reserva = Reserva::create([
            'data_reserva' => $request->data_reserva,
            'periodo' => $request->periodo,
            'id_turma' => $request->id_turma,
            'id_sala' => $request->id_sala]);

        if(empty($reserva))
            return response()->json('Erro ao efetuar reserva', 404);
        
        return response()->json('Reserva efetuada com sucesso', 201);
    }   

    public function show(int $id_reserva)
    {
        $reserva = Reserva::find($id_reserva);        
        
        if(is_null($reserva))
            return response()->json('',204);

        return response()->json($reserva);
    }

    public function destroy(int $id_reserva)
    {
        $qnt = Reserva::destroy($id_reserva);

        if($qnt === 0)
            return response()->json(['error' => 'Erro ao remover reserva'], 404);

        return response()->json('Reserva removido com sucesso', 204);
    }   

    public function update(int $id_reserva, Request $request)
    {
        $reserva = Reserva::find($id_reserva);

        if(is_null($reserva))
            return response()->json('',204);

        $reserva->fill($request->all());
        $reserva->save();

        return response()->json($reserva);
    }
}