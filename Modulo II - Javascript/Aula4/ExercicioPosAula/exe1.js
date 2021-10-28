var texto = "Hello3333 world!@#"

function quantVogaisEConsoantes(qualquerTexto){
    var quantVogais = 0;
    var quantConsoantes = 0;
    var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    for (var i = 0; i < qualquerTexto.length; i++) {
        if (qualquerTexto.charAt(i) === "a" || qualquerTexto.charAt(i) === "e" 
        || qualquerTexto.charAt(i) === "i" || qualquerTexto.charAt(i) === "o" 
        || qualquerTexto.charAt(i) === "u") {
          quantVogais += 1;
        }

        else if ((qualquerTexto.charAt(i) !== "a" || qualquerTexto.charAt(i) !== "e" 
        || qualquerTexto.charAt(i) !== "i" || qualquerTexto.charAt(i) !== "o" 
        || qualquerTexto.charAt(i) !== "u") && (!isNaN (texto.charAt(i)) === false)) {
            if( qualquerTexto.charAt(i).match(format)){
                
              }else{
                quantConsoantes +=1;
              }
        }

      }

    console.log(`A string ${qualquerTexto} tem ${quantVogais} vogais e ${quantConsoantes} consoantes`); 
}


quantVogaisEConsoantes(texto);
