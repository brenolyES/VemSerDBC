
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

    marcarPonto(dia, hora){}
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
// var addColaboradorAProjeto = (listaProjeto, listaColaborador) => {
//     var idColaboradorEscolhido = Number.parseInt(prompt("Digite o codigo do colaborador: "));
//     var colaboradorEncontrado = listaColaborador.find(elemento => elemento.idColaborador === idColaboradorEscolhido);
//     console.log(colaboradorEncontrado);
//     var idProjetoEscolhido = Number.parseInt(prompt("Digite o codigo do projeto: "));
//     var projetoEncontrado = listaProjeto.find(elemento => elemento.idProjeto === idProjetoEscolhido);
//     console.log(projetoEncontrado);
    
//     if (colaboradorEncontrado !== undefined) {
//         if (projetoEncontrado !== undefined) {
            
//             var confirmar = confirm(`Tem certeza que deseja alocar ${colaboradorEncontrado.nome} ao projeto ${projetoEncontrado.titulo} ?`);
            
//             switch(confirmar){

//                 case true:
//                     var novaListaProjeto = listaProjeto.find(elemento => elemento.idProjeto == idProjetoEscolhido);
//                     var novaListaColaborador = listaColaborador.find(elemento => elemento.idColaborador == idColaboradorEscolhido);
//                     novaListaProjeto.colaboradoresAlocados.push(novaListaColaborador);
//                     novaListaColaborador.idProjeto = idProjetoEscolhido;

//                     break;
//                 case false:
//                     console.log("aqui nao ira fazer nada");
//                     break;
//             }

//         } else {
//             console.log("Não existe projeto cadastrado com o id passado.")
//         }
//     } else {
//         console.log("Não existe colaborador cadastrado com o id passado.")
//     }
// }


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
                var idColaboradorEscolhido = Number.parseInt(prompt("Digite o codigo do colaborador: "));
                var idProjetoEscolhido = Number.parseInt(prompt("Digite o codigo do projeto: "));
               
                var novaListaProjeto = listaProjeto.find(elemento => elemento.idProjeto == idProjetoEscolhido);
                console.log(novaListaProjeto)
                var novaListaColaborador = listaColaborador.find(elemento => elemento.idColaborador == idColaboradorEscolhido);
                console.log(novaListaColaborador)
                listaProjeto.colaboradoresAlocados.push(novaListaColaborador);
                console.log(listaProjeto.colaboradoresAlocados)
                // listaProjeto.colaboradoresAlocados.push(novaListaColaborador);
                // novaListaColaborador.idProjeto = idProjetoEscolhido;
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