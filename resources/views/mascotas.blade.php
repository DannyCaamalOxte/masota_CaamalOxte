@extends('layouts.master')
@section('titulo','CRUD MASCOTAS')
@section('contenido')
	
	<!--inicia vue-->
	<div id="mascota">
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
					</div>
				
					<div class="card-body">
							<!--inicio de la tabla-->
				<table class="table table-bordered table-striped">
					<thead>
						<th>NOMBRE</th>
						<th>GENERO</th>
						<th>PESO</th>
						<th>ACCIONES</th>
					</thead>

					<tbody>
						
						<tr v-for="mascota in mascotas">
							<td>@{{mascota.nombre}}</td>
							<td>@{{mascota.genero}}</td>
							<td>@{{mascota.peso}}</td>
							<td>
								<button class="btn btn-sm">
									<i class="fas fa-edit"></i>
								</button>
								<button class="btn btn-sm">
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
        <h5 class="modal-title" id="exampleModalLabel">Registro de Mascota</h5>
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

      	<input type="number" class="form-control" placeholder="Peso de mascota" v-model="peso">




        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="guardarMascota()">Guardar</button>
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