<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Turma extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id_turma';
    protected $fillable = ['id_disciplina', 'id_professor'];

    public function Chamadas()
    {
        return $this->hasMany(Chamada::class);
    }

    public function Reservas()
    {
        return $this->hasMany(Reserva::class);
    }

    public function Disciplina()
    {
        return $this->belongsTo(Disciplina::class);
    }

    public function Professor()
    {
        return $this->belongsTo(Professor::class);
    }
}
