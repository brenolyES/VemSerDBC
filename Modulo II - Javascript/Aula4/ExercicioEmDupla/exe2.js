// 2) Crie uma função que recebe um array de números e encontre o segundo menor e o segundo maior número do array
//    e imprima eles no console (imprime somente 1 número se ele for o segundo menor e o segundo maior também);
//    Exemplo: minhaFuncao( [1, 3, 5, 7, 9] ) // neste caso, loga: 3  e loga:  7
//    Exemplo: minhaFuncao( [1, 3, 5] ) // neste caso, loga: 3

var array = [1,3,5];
var maior = 0;
var menor = 999999999999;
var index = 0;

function maiorEMenor(recebeArray) {
   for (let i=0; i<recebeArray.length; i++) {
       if (maior < recebeArray[i]) {
            maior = recebeArray[i]
       }
       if (menor > recebeArray[i]) {
           menor = recebeArray[i];
       }       
   }
   recebeArray.splice(recebeArray.indexOf(maior), 1);
   recebeArray.splice(recebeArray.indexOf(menor), 1);

    maior = 0;
   menor = 999999999999;

   for (let i=0; i<recebeArray.length; i++) {
    if (maior < recebeArray[i]) {
         maior = recebeArray[i];
    }
    if (menor > recebeArray[i]) {
        menor = recebeArray[i];
    }     
}
}
maiorEMenor(array);
console.log(array);
