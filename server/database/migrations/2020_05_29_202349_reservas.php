<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Reservas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservas', function (Blueprint $table) {
            $table->increments('id_reserva');
            $table->dateTime('data_reserva');
            $table->enum('periodo', ['Matutino', 'Vespertino', 'Noturno', 'Integral']);
            $table->unsignedInteger('id_turma');
            $table->unsignedInteger('id_sala');
            $table->foreign('id_turma')->references('id_turma')->on('turmas');
            $table->foreign('id_sala')->references('id_sala')->on('salas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservas');
    }
}
