
class Pets {
    nome = '';
    animal = '';
    idade = 0;

    constructor(nomeParametro, animalParametro, idadeParametro){
        this.nome = nomeParametro;
        this.animal = animalParametro;
        this.idade = idadeParametro;
    }

    latirMiar(){
        if(this.animal === "Cachorro"){
            console.log(`${this.nome} está Latindo`)
        } else if (this.animal === "Gato"){
            console.log(`${this.nome} está Miando`)
        }
    }
}

const meuGato = new Pets('nega', 'Gato', 12);
const meuCachorro = new Pets('doguinho', 'Cachorro', 10);

meuGato.latirMiar();
meuCachorro.latirMiar();