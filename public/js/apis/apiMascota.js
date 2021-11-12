var apiMascota='http://localhost/plantilla1/public/apiMascota';
new Vue({
	
	http: {
            headers: {
                'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
            }
        },

	el:"#mascota",

	data:{
		prueba:'esta es una prueba',
		mascotas:[],

		nombre:'',
		genero:'',
		peso:'',



	},

	//al crearse la pagina
	created:function(){
		this.obtenerMascotas();
	},

		methods:{
			obtenerMascotas:function(){
				this.$http.get(apiMascota).then(function(json){
					//este mascotas es el array de arriba
					this.mascotas=json.data;

				}).catch(function(json){
					console.log(json);
				});
			},

			mostrarModal:function(){
				$('#modalMascota').modal('show');
			},

			guardarMascota:function(){
				//construye el js para enviar al controlador
				var mascota={nombre:this.nombre,genero:this.genero,peso:this.peso};

				// console.log(mascota);

				//se envian los datos al controlador
				this.$http.post(apiMascota,mascota).then(function(j){
					console.log(j);
				}).catch(function(j){
					console.log(j);
				});
				$('#modalMascota').modal('hide');
				// console.log(mascota);
			},


		}
 
});