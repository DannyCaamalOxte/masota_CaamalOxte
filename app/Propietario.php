<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Propietario extends Model
{
    //
    protected $table='propietarios';
    protected $primaryKey='id_propietario';
    public $with=['mascotas'];

    public $incrementing=true;
    public $timestamps=true;

    public $fillable=[
    	'id_propietario',
    	'nombre',
    	'primer_apellido',
    	'segundo_apellido',
    	'genero'
    ];

    public function mascotas(){
    	return $this->hasMany(Mascota::class, 'id_propietario','id_propietario');
    }

}
