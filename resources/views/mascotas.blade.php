@extends('layouts.master')
@section('titulo','CRUD MASCOTAS')
@section('contenido')
	<h1>HOLA MUNDO</h1>
@endsection

@push('scripts')

	<script type="text/javascript" src="{{asset('js/apis/mascotas.js')}}"></script>

@endpush