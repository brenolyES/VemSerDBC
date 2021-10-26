var lista =  [1, 'Olá', undefined, 99999, 'Texto qualquer'];

function exibirLista (lista){
    for(let i=0; i < lista.length; i++){
        console.log(`Elemento ${i} da lista: ${lista[i]}`)
    }
}

exibirLista(lista);