var listaNumeros = [5, 2, 4, 1, 3];

function ordenar(listaNumeros){
    for(let i=0; i < listaNumeros.length; i++){
        for(let j=0; j < (listaNumeros.length - i - 1); j++){
            if(listaNumeros[j] > listaNumeros[j+1]){
                let maior = listaNumeros[j];
                listaNumeros[j] = listaNumeros[j+1];
                listaNumeros[j+1] = maior;
            }
        }
    }
    return listaNumeros;
}

console.log(ordenar(listaNumeros));