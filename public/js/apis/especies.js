function init(){
var apiEspecie='http://localhost/plantilla1/public/apiEspecie';
new Vue({
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
		getEspecies:function(){
			this.$http.get(apiEspecie).then(function(j){
				this.especies=j.data;
			})
		}

	},
	//fin de methods

	computed:{

	},
})

} window.onload = init;