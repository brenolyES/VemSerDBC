// 1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
//    Exemplo: minhaFuncao(370914) // retorno esperado: 419073;

var numero = 370914;
var aux = "";
var lista = [];

function inverteNumero(qualquerNumero){
    numeroConvertido = qualquerNumero.toString();
    for(let i = 0; i < numeroConvertido.length; i++){
        lista[i] = numeroConvertido[i];
    }

    for(let i = 0; i < (lista.length-i-1); i++){
        aux = lista[i];
        lista[i] = lista[lista.length-i-1]
        lista[lista.length-i-1] = aux;
    }
}

inverteNumero(numero);
console.log(numero);
console.log(lista);
