@extends('layouts.master')
@section('titulo','CRUD MASCOTAS')
@section('contenido')
	
	<!--inicia vue-->
	<div id="mascota">

<!-- <div class="row">
	<div class="col-md-8">
		<input type="number" placeholder="cantidad" class="form-control" v-model="cantidad"><br>
		<input type="number" placeholder="precio" class="form-control" v-model="precio"><br>
		<h5>total:@{{total}}</h5>
		
	</div>
</div> -->
<div class="row">
	<div class="col-md-8">
		
	</div>
</div>

		<div class="row">
			<!--inicio de col-->
			<div class="col-md-12">
				<!--inicio de card-->
				<div class="card card-warning">
					<div class="card-header">
						<h3>CRUD MASCOTAS
						<span class="btn btn-sm btn-primary" @click="mostrarModal()">
							<i class="fas fa-plus"></i>
						</span>
						</h3>

						<div class="col-md-6">
							<input type="text" placeholder="Buscar el nombre o la especie de la mascota" class="form-control" v-model="buscar" >
						</div>


					</div>
				
					<div class="card-body">
							<!--inicio de la tabla-->
				<table class="table table-bordered table-striped">
					<thead>
						<th hidden="">ID MASCOTA</th>
						<th>NOMBRE</th>
						<th>GENERO</th>
						<th>PESO</th>
						<th>ESPECIE</th>
						<th>ACCIONES</th>

					</thead>

					<tbody>
						
						<tr v-for="mascota in filtroMascotas">
							<td hidden="">@{{mascota.id_mascota}}</td>
							<td>@{{mascota.nombre}}</td>
							<td>@{{mascota.genero}}</td>
							<td>@{{mascota.peso}}</td>
							<td>@{{mascota.especie.especie}}</td>
							<td>
								<button class="btn btn-sm" @click="editandoMascota(mascota.id_mascota)">
									<i class="fas fa-edit"></i>
								</button>
								<button class="btn btn-sm" @click="eliminarMascota(mascota.id_mascota)">
									<i class="fas fa-trash-alt"></i>
								</button>
							</td>
							
						</tr>

					</tbody>

				</table>
				<!--fin de la tabla-->

						


					</div>

				</div>
				<!--fin de card-->

			</div>
			<!--fin de col-->
		</div>

		<!-- Modal para el formulario del registro de los moovimientos -->
<div class="modal fade" id="modalMascota" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" v-if="agregando==true">Registro de Mascota</h5>
        <h5 class="modal-title" id="exampleModalLabel" v-if="agregando==false">Editar Mascota</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      	<input type="text" class="form-control" placeholder="Nombre de mascota" v-model="nombre"><br>
      	
      	<select class="form-control" v-model="genero">
      		<option disabled="">Genero de Mascota</option>
      		<option value="M">M</option>
      		<option value="H">H</option>
      		
      	</select><br>

      	<input type="number" class="form-control" placeholder="Peso de mascota" v-model="peso"><br>

      	<select class="form-control" v-model="id_especie">
      		<option v-for="especie in especies" v-bind:value="especie.id_especie">@{{especie.especie}}</option>
      	</select>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="guardarMascota" v-if="agregando==true">Guardar</button>
        <button type="button" class="btn btn-warning" @click="actualizarMascota()" v-if="agregando==false">Guardar</button>
      </div>
    </div>
  </div>
</div>
<!-- aqui termina el modal-->



	</div>
	<!--termina vue-->
@endsection


@push('scripts')

	<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/apis/apiMascota.js')}}"></script>

@endpush