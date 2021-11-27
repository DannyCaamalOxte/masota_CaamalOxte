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
		totalProducto(){  
			return(id)=>{
				var total = 0;
				total=this.ventas[id].precio * this.cantidades[id];
				//actualizo el total de ventas del producto en el array ventas
				this.ventas[id].total=total;
				//actualizo la cantidad en el array ventas
				this.ventas[id].cantidad=this.cantidades[id];
				return total.toFixed(1);
			}

		},
		//finde total producto

		subTotal(){
			var total=0;
			var valor=0;

			for (var i =  this.ventas.length - 1; i >= 0; i--) {
				 total=total+this.ventas[i].total;
			}





			return total.toFixed(1);
		}

	}
	// fin de computed
})

} window.onload = init;