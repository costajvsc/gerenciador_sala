<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Disciplina extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id_disciplina';
    protected $fillable = ['id_disciplina', 'nome_disciplina'];
    
    public function Turmas()
    {
        return $this->hasMany(Turma::class);
    }
}
