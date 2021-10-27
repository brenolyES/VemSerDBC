var caractere = "a";
var array = ['c', 'a', 'texto', 'a'];

function removercaractere(caractere, array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === caractere){
            array.splice(i, 1);
        }
    }
}

removercaractere(caractere, array);
console.log(array);