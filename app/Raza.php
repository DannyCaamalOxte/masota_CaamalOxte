<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Raza extends Model
{
    //
    protected $table='razas';
    protected $primaryKey='id_raza';
    public $with=['mascotas'];


    public $incrementing=true;
    public $timestamps=false;

    public $fillable=[
    	'id_raza',
    	'raza'];
    	

}
