<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Chamadas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chamadas', function (Blueprint $table) {
            $table->increments('id_chamada');
            $table->unsignedInteger('id_turma');
            $table->unsignedInteger('id_aluno');
            $table->foreign('id_turma')->references('id_turma')->on('turmas');
            $table->foreign('id_aluno')->references('id_aluno')->on('alunos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chamadas');
    }
}
