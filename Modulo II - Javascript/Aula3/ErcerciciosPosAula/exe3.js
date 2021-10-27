var arrayUm = [1, 2, 3, 4];
var arrayDois = ['a', 'b', 'c', 'd'];

function juntarArrays(arrayUm, arrayDois){
    let arrayUnidos = arrayUm.concat(arrayDois);
    return console.log(arrayUnidos);
}

juntarArrays(arrayUm, arrayDois);