var lista = [];
var elementoUm = "ola";
var elementoDois = 22;
var elementoTres = "55";

function adicinarLista(elementoQualquer){
 lista.push(elementoQualquer);
}

function removerUltimoLista(){
    lista.pop();
}

console.log(`lista vazia: ${lista}`);

adicinarLista(elementoUm);
adicinarLista(elementoDois);
adicinarLista(elementoTres);

console.log(`adicionado elementos na lista: ${lista}`);

removerUltimoLista();

console.log(`removido ultimo elemento da lista: ${lista}`);