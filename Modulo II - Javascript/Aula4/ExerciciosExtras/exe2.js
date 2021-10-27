// 2) Crie uma função que receba uma string e retorna a quantidade de vogais na string;

var texto = "Brenoly Porto Lira da Silva"
var quantVogais = 0;

function descobrirQuantVogais(qualquerTexto) {
    var qualquerTexto = qualquerTexto.toString();

    for (var i = 0; i < qualquerTexto.length; i++) {
      if (qualquerTexto.charAt(i) === "a" || qualquerTexto.charAt(i) === "e" 
      || qualquerTexto.charAt(i) === "i" || qualquerTexto.charAt(i) === "o" 
      || qualquerTexto.charAt(i) === "u") {
        quantVogais += 1;
      }
    }
    return quantVogais;
  }

descobrirQuantVogais(texto);

console.log(quantVogais);