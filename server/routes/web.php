<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => '/api'], function () use ($router) {
    $router->group(['prefix' => 'alunos'], function () use ($router) {    
        $router->get('/', 'ALunoController@index');
        $router->post('/', 'ALunoController@store');
        $router->get('/{id_aluno}', 'ALunoController@show');
        $router->put('/{id_aluno}', 'ALunoController@update');
        $router->delete('/{id_aluno}', 'ALunoController@destroy');
    });

    $router->group(['prefix' => 'salas'], function () use ($router) {    
        $router->get('/', 'SalaController@index');
        $router->post('/', 'SalaController@store');
        $router->get('/{id_sala}', 'SalaController@show');
        $router->put('/{id_sala}', 'SalaController@update');
        $router->delete('/{id_sala}', 'SalaController@destroy');
    });

    $router->group(['prefix' => 'professors'], function () use ($router) {    
        $router->get('/', 'ProfessorController@index');
        $router->post('/', 'ProfessorController@store');
        $router->get('/{id_professor}', 'ProfessorController@show');
        $router->put('/{id_professor}', 'ProfessorController@update');
        $router->delete('/{id_professor}', 'ProfessorController@destroy');
    });

    $router->group(['prefix' => 'disciplinas'], function () use ($router) {    
        $router->get('/', 'DisciplinaController@index');
        $router->post('/', 'DisciplinaController@store');
        $router->get('/{id_disciplina}', 'DisciplinaController@show');
        $router->put('/{id_disciplina}', 'DisciplinaController@update');
        $router->delete('/{id_disciplina}', 'DisciplinaController@destroy');
    });

    $router->group(['prefix' => 'turmas'], function () use ($router) {    
        $router->get('/', 'TurmaController@index');
        $router->post('/', 'TurmaController@store');
        $router->get('/{id_turma}', 'TurmaController@show');
        $router->put('/{id_turma}', 'TurmaController@update');
        $router->delete('/{id_turma}', 'TurmaController@destroy');
    });

    $router->group(['prefix' => 'chamadas'], function () use ($router) {    
        $router->get('/', 'ChamadaController@index');
        $router->post('/', 'ChamadaController@store');
        $router->get('/{id_chamada}', 'ChamadaController@show');
        $router->put('/{id_chamada}', 'ChamadaController@update');
        $router->delete('/{id_chamada}', 'ChamadaController@destroy');
    });

    $router->group(['prefix' => 'reservas'], function () use ($router) {    
        $router->get('/', 'ReservaController@index');
        $router->post('/', 'ReservaController@store');
        $router->get('/{id_reserva}', 'ReservaController@show');
        $router->put('/{id_reserva}', 'ReservaController@update');
        $router->delete('/{id_reserva}', 'ReservaController@destroy');
    });
});