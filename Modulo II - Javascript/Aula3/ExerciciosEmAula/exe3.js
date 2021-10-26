var numeroUm = 5;
var numeroDois = 7;

function callBack(){
    alert("Algum número digitado foi inválido");
}

function soma(n1, n2, callBack){
    if((!isNaN(n1) && !isNaN(n2)) && (n1 !== "" && n2 !== "")){
        soma = n1 + n2;
        console.log(`O resultado da soma é: ${soma}`);
    } else {
        callBack();
    }
}

soma(numeroUm, numeroDois, callBack);