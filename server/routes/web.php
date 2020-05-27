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
    $router->get('/alunos', 'ALunoController@index');
    $router->post('/alunos', 'ALunoController@store');
    $router->get('/alunos/{id_aluno}', 'ALunoController@show');
    $router->put('/alunos/{id_aluno}', 'ALunoController@update');
    $router->delete('/alunos/{id_aluno}', 'ALunoController@destroy');
});