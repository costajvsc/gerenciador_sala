<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id_aluno';
    protected $fillable = ['id_aluno','nome_aluno', 'email_aluno', 'telefone'];

    public function Chamadas()
    {
        return $this->hasMany(Chamada::class);
    }
}