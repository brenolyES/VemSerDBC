// 1) Crie uma função que receba uma string e retorne a maior palavra dentro da string 
//    // exemplo: minhaFuncao( 'Eu adoro Javscript' ) => retorna 'Javascript'

var texto = "eu nao sei o que estou fazendo mais"
var maior = 0;
var maiorPalavra;

function maiorPalavraDaFrase(textoQualquer){
    var separador = textoQualquer.split(" ");
    // console.log(separador);
    for(let i = 0; i < separador.length; i++){
        if(separador[i].length > maior){
            maiorPalavra = separador[i];
            maior = separador[i].length;
        }
    }
    return maiorPalavra;
}

console.log(maiorPalavraDaFrase(texto));
