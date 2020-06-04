<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id_reserva';
    protected $fillable = ['data_reserva', 'periodo', 'id_turma', 'id_sala'];

    public function Turma()
    {
        return $this->belongsTo(Turma::class);
    }

    public function Sala()
    {
        return $this->belongsTo(Sala::class);
    }
}
