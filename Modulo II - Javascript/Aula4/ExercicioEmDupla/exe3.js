// 3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
// Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
// // neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';

var texto = "javascript vai acabar nos deixando doidos";

function convertePrimeiroCaractereMaiusculo(qualquerTexto) {
    var converteMinusculo = qualquerTexto.toLowerCase().split(" ");
    var textoUnificado = "";
    for (var a = 0; a < converteMinusculo.length; a++) {
        var caractere = converteMinusculo[a];
        converteMinusculo[a] = caractere[0].toUpperCase() + caractere.slice(1);
        textoUnificado += (converteMinusculo[a] + " ")
    }
    textoUnificado = textoUnificado.slice(0, -1);
    return textoUnificado;
}

console.log(convertePrimeiroCaractereMaiusculo(texto));