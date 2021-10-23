var isFriday;
var isTwoGreaterThanFour;
var isValueEmpty;

isFriday = confirm("Hoje é sexta feira?");
alert(isFriday);

var numero = prompt("digite um numero?")

if (numero > 4){
    isTwoGreaterThanFour = false;
    alert(`o numero ${numero} é maior que 4`)
} else if (numero < 4){
    isTwoGreaterThanFour = true;
    alert(`o numero ${numero} não é maior que 4`)
}

resposta = prompt("Digita qualquer coisa");

if(resposta !== "" && resposta !== null && resposta !== undefined) {
    alert("segue a vida");
    isValueEmpty = true;
} else {
    alert("resposta invalida")
    isValueEmpty = false;
}5

alert(`isFriday = ${isFriday}`)
alert(`isTwoGreaterThanFour = ${isTwoGreaterThanFour}`)
alert(`isValueEmpty = ${isValueEmpty}`)