var listaaNumeros = ['','','','',''];
var i = 0;
var soma =0;
do {

    listaaNumeros[i] = Number.parseInt(prompt("Digite um numero:"));
    soma = soma+ listaaNumeros[i];
    i++;

} while( i < listaaNumeros.length)

console.log(`A soma total dos numeros é: ${soma}`)