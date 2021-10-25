var respota = prompt("Digite Algum texto;")
console.log(respota)

if(respota === "SIM"){
    alert("Parabéns")
} else if(respota === "NAO"){
    var respota = prompt("Digite outro texto;")
    alert(respota)
} else {
    confirm('Você tem noções dos seus atos?')
}