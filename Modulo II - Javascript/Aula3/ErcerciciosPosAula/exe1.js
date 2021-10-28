var caractere = 'a';
var array = ['c', 'a', 'a', 'a', 'texto', 'a', 'a'];
var arrayNovo = [];

function removerCaractere(caractere, array){
    for(let i = 0; i < array.length; i++){
        if(array[i] !== caractere){
            arrayNovo.push(array[i]);
        }
    }
    return array = arrayNovo;
}

array = removerCaractere(caractere, array);
console.log(array);