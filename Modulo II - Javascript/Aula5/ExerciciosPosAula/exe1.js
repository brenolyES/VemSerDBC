var listaDeProdutos = [];
var id = 0;

do{
     var escolha = Number.parseInt(prompt("Escolha um opção:\n \n 1 - Para cadastrar um produto\n 2 - Excluir Produto\n 3 - Encontrar Produto\n 4 - Lista de produtos cadastrados\n 5 - Sair"));

    if((typeof escolha === "number" && escolha.toString() !== "NaN") 
    && (escolha === 1 || escolha === 2 || escolha === 3 || escolha === 4 || escolha === 5) ){
        
        switch (escolha) {
            case 1:

                var cadastrarProduto = (nomeProduto, valorProduto) => {
                    var nomeProduto = prompt("Nome do Produto: ");
                    var valorProduto = Number.parseFloat(prompt("Valor do Produto: "));
                    id += 1;
                    listaDeProdutos.push({codigo: id, nome: nomeProduto, valor: valorProduto});
                } 

                cadastrarProduto();

                break;

            case 2:
                console.log('opção 2 escolhida')
                escolha = 5;
                break;
            case 3:
                
                var encontrarProduto = (lista) => {
                    var codigoParaEncontrar = Number.parseInt(prompt("Digite o codigo do produto que você quer encontrar: "))
                    var produtoEncontrado = lista.find(elemento => elemento.codigo === codigoParaEncontrar);
                    return produtoEncontrado;
                }

                console.log(encontrarProduto(listaDeProdutos));
                5

                break;

            case 4:
                console.log(listaDeProdutos);
                escolha = 5;
                break;
        }





    } else {alert("opção invalida")};
}while(escolha != 5);