function init(){
var apiProducto='http://localhost/plantilla1/public/apiProducto';
new Vue({
	//asignamos el token
	http: {
            headers: {
                'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
            }
        },

	el:'#apiVenta',

	data:{
		mensaje:'HOLA MUNDO',
		sku:'',
		ventas:[],
		cantidades:[],
		cant:1,
		

	},

	//sejecuta automaticamente cuando la pagina se crea
	created:function(){
		

	},

	//inicio de methods
	methods:{
		buscarProducto:function(){

			if(this.sku) {
			var producto = {}
			this.$http.get(apiProducto + '/' + this.sku).then(function(j){
				producto = {
					sku:j.data.sku,
					nombre:j.data.nombre,
					precio:j.data.precio,
					cantidad:1,
					total:j.data.precio
				};
			
					this.ventas.push(producto);
					this.cantidades.push(1);
				this.sku='';
			});
		}
		}
		

	},
	//fin de methods

	computed:{

	},
})

} window.onload = init;