<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mascota extends Model
{
    protected $table='mascotas';
    protected $primaryKey='id_mascota';
    //especifica la relacion (especie)
    public $with=['especie'];

//define si la llave primaria es o no un numero incrementable
    public $incrementing=true;

    //activar o desactivar etiquesde tiempo
    public $timestamps=true;

    public $fillable=[
    	'id_mascota',
    	'nombre',
    	'edad',
    	'peso',
    	'genero',
    	'id_propietario'
    ];

    public function especie()
    {
        return $this->belongsTo(Especie::class, 'id_especie','id_especie');
    }
}
