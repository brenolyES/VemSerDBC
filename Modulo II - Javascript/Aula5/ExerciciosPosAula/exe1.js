var listaDeProdutos = [];
var id = 0;

var cadastrarProduto = (nomeProduto, valorProduto) => {
    var nomeProduto = prompt("Nome do Produto: ");
    var valorProduto = Number.parseFloat(prompt("Valor do Produto: "));
    id += 1;
    listaDeProdutos.push({codigo: id, nome: nomeProduto, valor: valorProduto});
} 

var excluirProdutos = (lista) => {
    var codigoParaEncontrar = Number.parseInt(prompt("Digite o codigo do produto que você deseja excluir: "));
    var listaFiltrada = lista.filter(elemento => elemento.codigo !== codigoParaEncontrar);
    return listaFiltrada;
}

var encontrarProduto = (lista) => {
    var codigoParaEncontrar = Number.parseInt(prompt("Digite o codigo do produto que você deseja encontrar: "))
    var produtoEncontrado = lista.find(elemento => elemento.codigo === codigoParaEncontrar);
    return produtoEncontrado;
}

var listarTodosProdutos = lista => lista.forEach(elemento => console.log(elemento));

var somarValorProdutos = listaDeProdutos.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual.valor;
}, 0);

do{
    var escolhaString = prompt("Escolha um opção:\n \n 1 - Para cadastrar um produto\n 2 - Excluir Produto\n 3 - Encontrar Produto\n 4 - Lista de produtos cadastrados\n 5 - Sair");
    var escolha = Number.parseInt(escolhaString);

    if((typeof escolha === "number" && escolha.toString() !== "NaN") 
    && (escolha === 1 || escolha === 2 || escolha === 3 || escolha === 4 || escolha === 5) ){
        
        switch (escolha) {
            case 1:
                cadastrarProduto();
                break;

            case 2:
                listaDeProdutos = excluirProdutos(listaDeProdutos);
                break;

            case 3:
                console.log(encontrarProduto(listaDeProdutos));
                break;
                
            case 4:       
                listarTodosProdutos(listaDeProdutos);
                console.log(somarValorProdutos);
                break;
        }
    } else {alert("opção invalida")};
}while(escolha != 5 && escolhaString !== null);