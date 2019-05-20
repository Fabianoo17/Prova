
var inicio = new Vue({
	el:"#novo-produto",
    data: {
    	produto: {},
		listaFabricantes : [],
    	fabricante: "",
    	
    },
    
    created: function(){
        let vm =  this;
        vm.buscarFabricantes();
        
    },
    
    methods:{
    	
		buscarFabricantes: function(){
			const vm = this;
			axios.get("/mercado/rs/fabricante").then(response => {
				vm.listaFabricantes = response.data;
			}).catch(function (error) {
			}).finally(function() {
			});
		},
		
		salvarProduto: function(){
			const vm = this;

			vm.listaFabricantes.forEach(f => {
				if(f.nome == vm.fabricante){
					vm.produto.fabricante = f;
				}
			});
			
			axios.post("/mercado/rs/produtos", vm.produto).then(
					alert('sucesso')
			).catch(function (error) {
				alert('erro')
			}).finally(function() {
			});
		},

		

    }
});
