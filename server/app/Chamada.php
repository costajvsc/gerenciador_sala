<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chamada extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id_chamada';
    protected $fillable = ['id_chamada','id_turma', 'id_aluno'];

    public function Aluno()
    {
        return $this->belongsTo(Aluno::class);
    }

    public function Turma()
    {
        return $this->belongsTo(Turma::class);
    }
}
