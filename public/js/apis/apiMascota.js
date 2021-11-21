var apiMascota='http://localhost/plantilla1/public/apiMascota';
var apiEspecie='http://localhost/plantilla1/public/apiEspecie';


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
		especies:[],
		razas:[],

		nombre:'',
		genero:'',
		peso:'',
		agregando:true,
		id_mascota:'',
		id_especie:'',
		id_raza:'',

		cantidad:1,
		precio:0,
		buscar:'',



	},


	//al crearse la pagina
	created:function(){
		this.obtenerMascotas();
		this.obtenerEspecies();
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
				this.id_especie='';
				$('#modalMascota').modal('show');
			},

			guardarMascota:function(){
				//construye el js para enviar al controlador
				var mascota={nombre:this.nombre,
					genero:this.genero,
					peso:this.peso,
					id_especie:this.id_especie};

				// console.log(mascota);

				//se envian los datos al controlador
				this.$http.post(apiMascota,mascota).then(function(j){
					this.obtenerMascotas();
					this.nombre='';
					this.genero='';
					this.peso='';
					this.id_especie='';
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
									peso:this.peso,
									id_especie:this.id_especie};
				//console.log(jsonMascota);
				this.$http.patch(apiMascota + '/' + this.id_mascota,jsonMascota).then(function(json){
					this.obtenerMascotas();
				});
				$('#modalMascota').modal('hide');
				//alert('estamos modificando');
			},

			obtenerEspecies:function(){
				this.$http.get(apiEspecie).then(function(json){
					this.especies=json.data;
				})
			},

			obtenerRazas(e){
					var id_especie=e.target.value;
					//console.log(id_especie);

					this.$http.get(apiMascota +'/getRazas/' + id_especie).then(function(j){
						//console.log(j.data);
						this.razas=j.data;
					});
			}



		},
		//fin de methods

		//inicio de computed
		computed:{
			total:function(){
				var t=0;
				t= this.cantidad * this.precio;
				return t;
			},

			filtroMascotas:function(){
				return this.mascotas.filter((mascota)=>{
					return mascota.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) ||
							mascota.especie.especie.toLowerCase().match(this.buscar.toLowerCase().trim())
				});
			}
		}
		//fin de computed

 
});