@extends('layouts.master')
@section('titulo','Interface de ventas')
@section('contenido')
	
<div id="apiVenta"> <!-- inicio de vue -->
		<div class="container"> <!-- inicio de container -->
			<div class="row"> <!-- inicio de row -->
				<div class="col-md-4"> <!-- inicio de col -->

					<div class="input-group mb-3">
  						<input type="text" class="form-control" placeholder="Escriba el codigo del producto" aria-describedby="basic-addon2" v-model="sku" v-on:keyup.enter="buscarProducto()">
  					<div class="input-group-append">
  						<button class="btn btn-outline-secondary" type="button" @click="buscarProducto()">Búscar</button>
  					</div>
				</div>

			</div> <!-- fin del col -->
			
		</div> <!-- fin de row -->
	


		<div class="row">
			<div class="col-md-12">

				<table class="table table-bordered">
					<thead>
						<th>SKU</th>
						<th>PRODUCTO</th>
						<th>PRECIO</th>
						<th>CANTIDAD</th>
						<th>TOTAL</th>
					</thead>

					<tbody>
						<tr v-for="(venta,index) in ventas">
							<td>@{{venta.sku}}</td>
							<td>@{{venta.nombre}}</td>
							<td>@{{venta.precio}}</td>
							<td><input type="number" v-model.number="cantidades[index]" min="1"></td>
							<td>@{{venta.total}}</td>
						</tr>
					</tbody>

				</table>
				
			</div>
		</div>



	</div> <!-- fin de container -->
</div> <!-- fin de vue -->
	
@endsection


@push('scripts')

	<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/apis/apiVenta.js')}}"></script>

@endpush

<!-- <input type="hidden" name="route" value="{{url('/')}}"> -->