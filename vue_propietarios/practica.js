new Vue({
   //Especificar la zona de actuacion de Vue
  el:"#miPagina",

  // Esta seccion de VUE sirve para declarar Variables
  // Y constantes.
  data:{
   nombre:'',
   primer_apellido:'',
   segundo_apellido:'',
   generos:'',
   editando:0,
    indice:0,
   buscar:'',
   
   propietarios:[{nombre:'Luis',primer_apellido:'Perez',segundo_apellido:'Ojeda',genero:'M'},
                 {nombre:'Jorge',primer_apellido:'Gonzales',segundo_apellido:'Perez',genero:'M'},
                 {nombre:'Leticia',primer_apellido:'Cruz',segundo_apellido:'May',genero:'F'}
            ],

   genero:[
               {clave:1,nombre:'M'},
               {clave:2,nombre:'F'}
            ],



  },

  // Este objeto permite crear funciones y/o procedimeintos 
  methods:{

   agregarPropietario:function(){
    if(this.nombre && this.primer_apellido && this.segundo_apellido && this.genero){
      // Construimos un objeto de tipo mascota para insertar en el array
      var unPropietario={nombre:this.nombre,primer_apellido:this.primer_apellido,segundo_apellido:this.segundo_apellido,genero:this.generos};

      // Agrego un objeto mascota
      this.propietarios.push(unPropietario);
      this.limpiarHtml();

      //enviamos el foco al primer componente al html/nombre de la mascota, se debe agregar a todas las interfaces
      this.$refs.nombre.focus();

      //aca agregamos el mensaje de exito
      Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Se ha guardado exitosamente',
         showConfirmButton: false,
         timer: 2000
       })
   }
   else
     Swal.fire({
         position: 'top-end',
         icon: 'error',
         title: 'Debe capturar todos los datos',
         showConfirmButton: false,
         timer: 2000
       })
   },

   limpiarHtml:function(){
     this.nombre='';
     this.primer_apellido='';
     this.segundo_apellido='';
     this.generos='';
   },

   eliminarPropieario:function(pos){
      var pregunta=confirm('¿Esta seguro que desea eliminar?');
      if(pregunta)
        //console.Log('voy a eliminar: ' + pos);
      this.propietarios.splice(pos,1);
      //else
        //console.Log('se arrepintio: ' + pos);
   },


   editarPropietario:function(pos){
      this.nombre=this.propietarios[pos].nombre;
      this.primer_apellido=this.propietarios[pos].primer_apellido;
      this.segundo_apellido=this.propietarios[pos].segundo_apellido;
      this.generos=this.propietarios[pos].genero;
      this.editando=1;
      this.indice=pos;
   },
   
   cancelar:function(){
      this.limpiarHtml();
      this.editando=0;
   },
   //modifico los valores del array de objetos
   guardarEdicion:function(){
      this.propietarios[this.indice].nombre=this.nombre;
      this.propietarios[this.indice].primer_apellido=this.primer_apellido;
      this.propietarios[this.indice].segundo_apellido=this.segundo_apellido;
      this.propietarios[this.indice].genero=this.generos;

   //limpiamos los componentes html e indicamos que terminamos de editar, activando el boton agregar/azul
      this.limpiarHtml();
      this.editando=0;
   }


  },
  // FIN DE METHODS
  //seccion para calcular valor automaticamente
  computed:{
    numeroPropietarios: function(){
      var num=0;
      num=this.propietarios.length;
      return num;
    },
    filtroPropietarios:function(){
      return this.propietarios.filter((propietario)=>{
        return propietario.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) ||
        propietario.primer_apellido.toLowerCase().match(this.buscar.toLowerCase().trim()) ||
        propietario.segundo_apellido.toLowerCase().match(this.buscar.toLowerCase().trim()) ||
        propietario.genero.toLowerCase().match(this.buscar.toLowerCase().trim())

      });
    }
  }

});