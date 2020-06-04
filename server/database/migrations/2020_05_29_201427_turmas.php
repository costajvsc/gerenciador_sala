<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Turmas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('turmas', function (Blueprint $table) {
            $table->increments('id_turma');
            $table->unsignedInteger('id_disciplina');
            $table->unsignedInteger('id_professor');
            $table->foreign('id_disciplina')->references('id_disciplina')->on('disciplinas');
            $table->foreign('id_professor')->references('id_professor')->on('professors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('turmas');
    }
}
