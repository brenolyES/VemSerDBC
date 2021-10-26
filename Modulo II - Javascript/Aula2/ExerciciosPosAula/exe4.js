var numero = 0;

for(let i=1; i <= 100; i++){
    if((numero + i)%2 === 0){
        quadrado = Math.pow(i, 2)
        console.log(`${i}^2 = ${quadrado}`)
    }   
}

