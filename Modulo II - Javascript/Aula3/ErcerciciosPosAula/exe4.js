var lista = [];
var elementoUm = "ola";
var elementoDois = 22;
var elementoTres = "55";

function adicionarLista(elementoQualquer){
 lista.push(elementoQualquer);
}

function removerUltimoLista(){
    lista.pop();
}

console.log(`lista vazia: ${lista}`);

adicionarLista(elementoUm);
adicionarLista(elementoDois);
adicionarLista(elementoTres);

console.log(`adicionado elementos na lista: ${lista}`);

removerUltimoLista();

console.log(`removido ultimo elemento da lista: ${lista}`);