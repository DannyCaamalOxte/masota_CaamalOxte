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
		agregando:true,
		id_mascota:'',



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
					console.log(json.data);
				}).catch(function(json){
					console.log(json);
				});
			},

			mostrarModal:function(){
				this.agregando=true;
				this.nombre='';
				this.genero='';
				this.peso='';
				$('#modalMascota').modal('show');
			},

			guardarMascota:function(){
				//construye el js para enviar al controlador
				var mascota={nombre:this.nombre,genero:this.genero,peso:this.peso};

				// console.log(mascota);

				//se envian los datos al controlador
				this.$http.post(apiMascota,mascota).then(function(j){
					this.obtenerMascotas();
					this.nombre='';
					this.genero='';
					this.peso='';
				}).catch(function(j){
					console.log(j);
				});
				$('#modalMascota').modal('hide');
				console.log(mascota);
				// console.log(mascota);
			},

			eliminarMascota:function(id){
				var confir= confirm('Esta seguro de eliminar la mascota?');
				if (confir)
				{
					this.$http.delete(apiMascota + '/' + id).then(function(json){
						this.obtenerMascotas();
					}).catch(function(json){

					});
				}
			},

			editandoMascota:function(id){
				this.agregando=false;
				this.id_mascota=id;
				this.$http.get(apiMascota + '/' + id).then(function(json){
					//console.log(json.data);
					this.nombre=json.data.nombre;
					this.genero=json.data.genero;
					this.peso=json.data.peso;
				});
				$('#modalMascota').modal('show');
			},

			actualizarMascota:function(){
				var jsonMascota = {nombre:this.nombre,
									genero:this.genero,
									peso:this.peso};
				//console.log(jsonMascota);
				this.$http.patch(apiMascota + '/' + this.id_mascota,jsonMascota).then(function(json){
					this.obtenerMascotas();
				});
				$('#modalMascota').modal('hide');
				//alert('estamos modificando');
			}


		}
 
});