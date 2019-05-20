var inicio = new Vue({
	el:"#inicio",
    data: {
    	listaFabricantes : [],
    	fabricante: "",
    	editProduto:null,
        listaProdutos: [],
        listaProdutosHeader: [
			{sortable: false, key: "nome", label:"Nome"},
			{sortable: false, key: "fabricante.nome", label:"Fabricante"},
			{sortable: false, key: "volume", label:"Volume"},
			{sortable: false, key: "unidade", label:"Unidade"},
			{sortable: false, key: "estoque", label:"Estoque"}
		]
    },
    created: function(){
        let vm =  this;
        vm.buscaProdutos(),
       
        vm.buscarFabricantes();
    },
    methods:{
        buscaProdutos: function(){
			const vm = this;
			axios.get("/mercado/rs/produtos")
			.then(response => {
				vm.listaProdutos = response.data;
			}).catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
			}).finally(function() {
			});
		},
		deleteProduto(id, i){
			fetch("/mercado/rs/produtos/"+ id,{
				method: "DELETE"
			})
			.then(() =>{
				this.listaProdutos.splice(i, 1);
			})
		},
		editarProduto(produto){
			
			fetch("/mercado/rs/produtos/"+ produto.id,{
				body: JSON.stringify(produto),
				method: "PUT",
					headers:{
						"Content-Type" : "application/json"
					}
			})
			.then(() =>{
				this.editProduto = null;
			})
		},
		buscarFabricantes: function(){
			const vm = this;
			axios.get("/mercado/rs/fabricante").then(response => {
				vm.listaFabricantes = response.data;
			}).catch(function (error) {
			}).finally(function() {
			});
		},
    },


});


