
class Marcacao {
    dia = 0;
    hora = 0;

    constructor (diaParametro, horaParamentro){
        this.dia = diaParametro;
        this.hora = horaParamentro;
    }
}

class Colaborador {
    idColaborador = 0;
    nome = "";
    idProjeto = 0;
    marcacoesPonto = [];

    constructor (idColaboradorParametro, nomeParametro, idProjetoParametro, marcacoesPontoParametro){
        this.idColaborador = idColaboradorParametro;
        this.nome = nomeParametro;
        this.idProjeto = idProjetoParametro;
        this.marcacoesPonto = marcacoesPontoParametro;
    }

    marcarPonto(dia, hora){}
}

class Projeto {
    idProjeto = 0;
    titulo = "";
    ColaboradoresAlocados = []

    constructor (idProjetoParametro, tituloParametro, ColaboradoresAlocadosParametro){
        this.idProjeto = idProjetoParametro;
        this.titulo = tituloParametro;
        this.ColaboradoresAlocados = ColaboradoresAlocadosParametro;
    }
}

class Validacoes {

    validaString (valor){
        if(typeof valor === 'string' && valor !== ''){
            return true;
        } else {
            return false;
        }
    }

    validaNumber (valor){
        if((typeof valor === "number" && valor.toString() !== "NaN")){
            return true;
        } else {
            return false;
        }
    }

}


// -----------------------------------Main do codigo-----------------------------------


const colaborador = new Colaborador();
const marcacao = new Marcacao();
const projeto = new Projeto();

var escolha = 1;
while(escolha !== 9){

    var escolhaString = prompt("Escolha um opção:\n \n 1 - Cadastrar Colaborador;\n 2 - Cadastrar Projeto;\n 3 - Alocar Colaborador;\n 4 - Desalocar Colaborador; 5 - Marcar Ponto;\n 6 - Ver Lista de Colaboradores Sem Projeto;\n 7 - Ver Lista de Projetos Sem Colaboradores;\n 8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;\n 9 - Encerrar Execução do Sistema;");

    var escolha = Number.parseInt(escolhaString);
    
    if (new Validacoes().validaNumber(escolha) === true){
        
        switch(escolha){

            case 1:
                
                break;

            case 2:
                alert("2");
                break;

            case 3:
                alert("3");
                break;

            case 4:
                alert("4");
                break;

            case 5:
                alert("5");
                break;

            case 6:
                alert("6");
                break;

            case 7:
                alert("7");
                break;

            case 8:
                alert("8");
                break;

            case 9:
                alert("Sistema Encerrado")
                break;

            default: 
                alert("Escolha um número valido!")
        } 
    } 
}








