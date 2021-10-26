var escolha = Number.parseInt(prompt("Qual a tabuada de 1-10 que voce deseja ver?")) 


for (let i = 1; i <= 10; i++) {
    console.log(`${escolha}x${i} = ${(escolha * i)}`)
}