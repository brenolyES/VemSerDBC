
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

var idColaborador = 0;
var idProjeto = 0;

var listaColaborador = [];
var listaProjeto = [];

var addColaborador = (lista) => {
    var nome = prompt("Nome: ");
    idColaborador += 1;
    lista.push(new Colaborador(idColaborador, nome));
}

var addProjeto = (lista) => {
    var titulo = prompt("Titulo do projeto: ");
    idProjeto += 1;
    lista.push(new Projeto(idProjeto, titulo));
}

var addColaboradorAProjeto = (listaUm, listaDois) => {
    var escolhaColaborador = Number.parseInt(prompt("Digite o codigo do colaborador: "));
    var validarIdColaborador = listaDois.find(id => id.idColaborador === escolhaColaborador);
    var escolhaProjeto = Number.parseInt(prompt("Digite o codigo do projeto: "));
    var validarIdProjeto = listaUm.find(id => id.idProjeto === escolhaProjeto);
    
    if (validarIdColaborador !== undefined) {
        if (validarIdProjeto !== undefined) {
            
            var confirmar = confirm(`Tem certeza que deseja alocar ${validarIdColaborador.nome} ao projeto ${validarIdProjeto.titulo} ?`);
            
            switch(confirmar){

                case true:
                    console.log("aqui vai fazer algo");
                    break;
                case false:
                    console.log("aqui nao ira fazer nada");
                    break;
            }

        } else {
            console.log("Não existe projeto cadastrado com o id passado.")
        }
    } else {
        console.log("Não existe colaborador cadastrado com o id passado.")
    }
}


var escolha = 1;
while(escolha !== 9){

    var escolhaString = prompt("Escolha um opção:\n \n 1 - Cadastrar Colaborador;\n 2 - Cadastrar Projeto;\n 3 - Alocar Colaborador a um projeto;\n 4 - Desalocar Colaborador; 5 - Marcar Ponto;\n 6 - Ver Lista de Colaboradores Sem Projeto;\n 7 - Ver Lista de Projetos Sem Colaboradores;\n 8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;\n 9 - Encerrar Execução do Sistema;");

    var escolha = Number.parseInt(escolhaString);
    
    if (new Validacoes().validaNumber(escolha) === true){
        
        switch(escolha){

            case 1:
                
                addColaborador(listaColaborador);
                // console.log(listaColaborador);
                break;

            case 2:
                
                addProjeto(listaProjeto);
                // console.log(listaProjeto);
                break;

            case 3:
                
                addColaboradorAProjeto(listaProjeto, listaColaborador);
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
                console.log("Sistema Encerrado!")
                break;

            default:
                console.log("Escolha um número dentre as opções mostradas!") 
        } 
    } else {
        console.log("Você precisa digitar um numero!")
    }
}








