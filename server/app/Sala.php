<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sala extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id_sala';
    protected $fillable = ['id_sala', 'localizacao'];

    public function Reservas()
    {
        return $this->hasMany(Reserva::class);
    }
}
