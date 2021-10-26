var salario = 1000.0;
var anoinicial = 2016;
var aumento = 0.015;
var anoinicialAtual = 2021;

while(anoinicial <= anoinicialAtual){
    if(anoinicial >= 2016 && anoinicial <=2018){
        var valoraumento1 = salario * aumento;
        salario = salario + valoraumento1;
        console.log(`Salario no ano de ${anoinicial} = ${salario}`)
    } else if (anoinicial > 2018){
        var aumento = aumento*2
        var valoraumento2 = salario * aumento;
        salario = salario + valoraumento2;
        console.log(`Salario no ano de ${anoinicial} = ${salario}`)
    }
    anoinicial = anoinicial + 1;
}