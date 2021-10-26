var numero = 0;

for(let i=1; i <= 50; i++){
    if((numero + i)%2 === 0){
        numero = numero + i;
    }   
}

console.log(numero)