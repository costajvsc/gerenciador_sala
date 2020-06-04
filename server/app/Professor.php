<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id_professor';
    protected $fillable = ['id_professor', 'nome_professor', 'email_professor'];

    public function Turmas()
    {
        return $this->hasMany(Turma::class);
    }
}
