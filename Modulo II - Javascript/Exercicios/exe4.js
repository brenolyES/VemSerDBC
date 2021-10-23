var numero1 = Number.parseInt(prompt("digite o primeiro numero: ")) 
var numero2 = Number.parseInt(prompt("digite o primeiro numero: ")) 
var operacao = prompt("escolha: + para somar | - para subtrair | * para multiplicar | / para dividir")
var resultado;

if (operacao === "+" || operacao === "-" || operacao === "*" || operacao === "/"){
    if((typeof numero1 === "number" && numero1.toString() !== "NaN") 
    && (typeof numero2 === "number" && numero2.toString() !== "NaN")){
        
        if (operacao === "+"){
            resultado = numero1 + numero2;
            alert(`Resultado da soma é: ${resultado}`)
        } else if (operacao === "-"){
            resultado = numero1 - numero2;
            alert(`Resultado da subtração é: ${resultado}`)
        } else if (operacao === "*"){
            resultado = numero1 * numero2;
            alert(`Resultado da multiplicação é: ${resultado}`)
        } else if (operacao === "/") {
            if (numero1 === 0 || numero2 === 0){
                alert("Não é possivel um numero por 0")
            } else {
                resultado = numero1 / numero2;
                alert(`Resultado da divisão é: ${resultado}`)
            }
        }

    } else {alert("algum numero digitado errado")}
} else {alert("operação invalida")}