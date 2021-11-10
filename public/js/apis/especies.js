function init(){
var apiEspecie='http://localhost/plantilla1/public/apiEspecie';
new Vue({
	//asignamos el token
	http: {
            headers: {
                'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
            }
        },

	el:'#apiEspecies',

	data:{
		mensaje:'HOLA MUNDO',
		especies:[],

	},

	//sejecuta automaticamente cuando la pagina se crea
	created:function(){
		this.getEspecies();

	},

	//inicio de methods
	methods:{
		//obtiene el listado de todas las ESPECIES
		getEspecies:function(){
			this.$http.get(apiEspecie).then(function(j){
				this.especies=j.data;
			})
		},

		eliminarEspecie:function(id){
			Swal.fire({
				title: 'Esta seguro que desea eliminar?',
				text: "No podrá deshacer cambios",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Si, Eliminalo!'
			}).then((result) => {
				if (result.isConfirmed){
					//eliminar especie seleccionada
					this.$http.delete(apiEspecie + '/' + id).then(function(j){
					this.getEspecies();//refrescar pagina
			}).catch(function(j){
				console.log(j);
			});

			//fin de eliminacion
					Swal.fire(
						'Eliminado!',
						'Tu mascota fué Eliminada',
						'succes'
			)
		}
	});





			
		}

	},
	//fin de methods

	computed:{

	},
})

} window.onload = init;