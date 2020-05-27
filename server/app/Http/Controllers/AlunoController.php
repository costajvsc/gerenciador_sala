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
        Aluno::create([
            'nome_aluno' => $request->nome_aluno,
            'email_aluno' => $request->email_aluno,
            'telefone' => $request->telefone]);
        return response()->json('Aluno inserido com sucesso', 201);
    }
}