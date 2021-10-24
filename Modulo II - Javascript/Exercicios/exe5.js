var nota1 = Number.parseFloat(prompt("Nota 1: "));
var nota2 = Number.parseFloat(prompt("Nota 2: "));
var nota3 = Number.parseFloat(prompt("Nota 3: "));
var media;

if ((typeof nota1 === "number" && nota1.toString() !== "NaN")
    && (typeof nota2 === "number" && nota2.toString() !== "NaN")
    && (typeof nota3 === "number" && nota3.toString() !== "NaN")) {

    media = (nota1 + nota2 + nota3) / 3
    if(media < 5){
        alert("Você foi reprovado!")
    } else if (media >= 5 && media < 7){
        alert("Você está em recuperação!")
    } else {
        alert("Parabéns você passou!")
    }

} else {
    alert("Numero invalido")
}