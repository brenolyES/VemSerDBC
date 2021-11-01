
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

    constructor (idColaboradorParametro, nomeParametro, idProjetoParametro){
        this.idColaborador = idColaboradorParametro;
        this.nome = nomeParametro;
        this.idProjeto = idProjetoParametro;
    }

    marcarPonto(dia, hora){
        this.marcacoesPonto.push(new Marcacao(dia, hora));
    }
}

class Projeto {
    idProjeto = 0;
    titulo = "";
    colaboradoresAlocados = [];

    constructor (idProjetoParametro, tituloParametro){
        this.idProjeto = idProjetoParametro;
        this.titulo = tituloParametro;
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

var addColaboradorAProjeto = (listaProjeto, listaColaborador) => {
    var idColaboradorEscolhido = Number.parseInt(prompt("Digite o codigo do colaborador: "));
    var idProjetoEscolhido = Number.parseInt(prompt("Digite o codigo do projeto: "));
    var projetoEncontrado = listaProjeto.find(elemento => elemento.idProjeto == idProjetoEscolhido);
    var colaboradorEncontrado = listaColaborador.find(elemento => elemento.idColaborador == idColaboradorEscolhido);
    if (colaboradorEncontrado !== undefined) {
        if (projetoEncontrado !== undefined) {
            projetoEncontrado.colaboradoresAlocados.push(colaboradorEncontrado);
            colaboradorEncontrado.idProjeto = idProjetoEscolhido;   
        } else {console.log("Não existe projeto cadastrado com o id passado.")}
    } else {console.log("Não existe colaborador cadastrado com o id passado.")}
}

var desalocarColaboradorDeUmProjeto = (listaProjeto, listaColaborador) => {
    var idColaboradorADesalocar = Number.parseInt(prompt("Digite o codigo do colaborador que deseja desalocar: "));
    var colaboradorADesalocar = listaColaborador.find(elemento => elemento.idColaborador === idColaboradorADesalocar);
    if(colaboradorADesalocar !== undefined){
        var ProjetoADesalocar = listaProjeto.find(elemento => elemento.idProjeto === colaboradorADesalocar.idColaborador);
        if(colaboradorADesalocar.idProjeto !== undefined){
            colaboradorADesalocar.idProjeto = undefined;
            ProjetoADesalocar.colaboradoresAlocados = ProjetoADesalocar.colaboradoresAlocados.filter(elemento => elemento.idColaborador !== colaboradorADesalocar.idColaborador);
        }else {console.log("Esse colaborador não esta em nenhum projeto cadastrado.")}
    }else {console.log("Não existe colaborador cadastrado com o id passado.")}
}

var marcarPonto = (listaColaborador) => {
    var idColaboradorAMarcarOPonto = Number.parseInt(prompt("Digite o codigo do colaborador ao qual voce quer marcar o ponto: "));
    var colaboradorAMarcarOPonto = listaColaborador.find(elemento => elemento.idColaborador === idColaboradorAMarcarOPonto);
    if(colaboradorAMarcarOPonto !== undefined){
        var dia = Number.parseInt(prompt("Digite o dia: "));
        var horas = Number.parseInt(prompt("Digite a hora: "));
        colaboradorAMarcarOPonto.marcarPonto(dia, horas);
    }else {console.log("Não existe colaborador cadastrado com o id passado.")}
}

var colaboradorSemProjeto = (listaColaborador) => {
    var colaboradorSemProjeto = listaColaborador.filter(elemento => elemento.idProjeto === undefined);
    return colaboradorSemProjeto;
}

var projetoSemColaborador = (listaProjeto) => {
    var projetoSemColaborador = listaProjeto.filter(elemento => elemento.colaboradoresAlocados.length === 0);
    return projetoSemColaborador;
}

var colaboradorSemMarcacaoDePonto = (listaColaborador) => {
    var colaboradorSemMarcacaoDePonto = listaColaborador.filter(elemento => elemento.marcacoesPonto.length === 0);
    return colaboradorSemMarcacaoDePonto;
}

var escolha = 1;
while(escolha !== 9){

    var escolhaString = prompt("Escolha um opção:\n \n 1 - Cadastrar Colaborador;\n 2 - Cadastrar Projeto;\n 3 - Alocar Colaborador a um projeto;\n 4 - Desalocar Colaborador;\n 5 - Marcar Ponto;\n 6 - Ver Lista de Colaboradores Sem Projeto;\n 7 - Ver Lista de Projetos Sem Colaboradores;\n 8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;\n 9 - Encerrar Execução do Sistema;");

    var escolha = Number.parseInt(escolhaString);
    
    if (new Validacoes().validaNumber(escolha) === true){
        
        switch(escolha){

            case 1:
                addColaborador(listaColaborador);
                break;

            case 2:
                addProjeto(listaProjeto);
                break;

            case 3:
                addColaboradorAProjeto(listaProjeto, listaColaborador);
                break;

            case 4:
                desalocarColaboradorDeUmProjeto(listaProjeto, listaColaborador);
                break;

            case 5:
                marcarPonto(listaColaborador);
                break;

            case 6:
                console.log(colaboradorSemProjeto(listaColaborador));
                break;

            case 7:
                console.log(projetoSemColaborador(listaProjeto));
                break;

            case 8:
                console.log(colaboradorSemMarcacaoDePonto(listaColaborador));
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