var texto = "Hello3333 world!@#"

function quantVogaisEConsoantes(qualquerTexto) {
  var quantVogais = 0;
  var quantConsoantes = 0;

  for (var i = 0; i < qualquerTexto.length; i++) {
    if (qualquerTexto.charAt(i) === "a" || qualquerTexto.charAt(i) === "e"
      || qualquerTexto.charAt(i) === "i" || qualquerTexto.charAt(i) === "o"
      || qualquerTexto.charAt(i) === "u") {
      quantVogais++;
    }
    else {
      if (qualquerTexto.toLowerCase() !== qualquerTexto.toUpperCase()) {
        quantConsoantes++;
      }
    }
  }
  console.log(`A string ${qualquerTexto} tem ${quantVogais} vogais e ${quantConsoantes} consoantes`);
}


quantVogaisEConsoantes(texto);
