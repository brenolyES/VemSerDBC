
//#region Validação de Nome
const validarNome = () => {
    console.log(document.getElementById("name-input-registration").value)
}
//#endregion Validação de Nome

//#region Validação Email
const validarEmail = () => {
    let emailDigitado = document.getElementById('email-input-registration').value;
    let listaCaracteres = emailDigitado.split(''); // [...emailDigitado]

    let emailSplit = emailDigitado.split('@');
    
    let possuiArroba = emailSplit.length > 1;

    let dominioEmail = possuiArroba ? emailSplit[1] : '';
    let dominioEmailSplit = dominioEmail.split('.');

    let possuiPontosNoDominio = dominioEmailSplit.length > 1;

    let possuiCaracteresEntrePontos = dominioEmailSplit.every( d => d.length > 1 );

    let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;

    let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra;

    // para setar o texto de erro em vermelho
    let erroEmail = document.getElementById('email-registration-error');
    erroEmail.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}
//#endregion Validação Email

//#region Validação Senha
const validarSenha = () => {
    let senhaDigitada = document.getElementById('password-input-registration').value;
    let listaCaracteres = senhaDigitada.split('');

    let letras = listaCaracteres.filter( char => char.toLowerCase() !== char.toUpperCase() );

    let possuiLetraMaiuscula = letras.some( l => l.toUpperCase() === l ); // "A".toUppercase() === "A"
    let possuiLetraMinuscula = letras.some( l => l.toLowerCase() === l );

    let possuiCharEspecial = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );
    let possuiNumero = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );

    let possuiOitoCaracteres = senhaDigitada.length >= 8;

    let naoPossuiEspacos = !senhaDigitada.includes(' ');

    let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && 
        possuiCharEspecial && possuiNumero && naoPossuiEspacos;

    // para setar o texto de erro em vermelho
    let erroSenha = document.getElementById('password-registration-error');
    erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
};
//#endregion Validação Senha

//#region Validação Data
const validarData = () => { 
    let inputData = document.getElementById('date-input-registration');
    let dataDigitada = inputData.value;

    adicionarMascaraData(inputData, dataDigitada);

    let dataConvertida = moment(dataDigitada, 'DDMMYYYY');

    let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18;

    // comparações de data - date1.isBefore(date2)  /  date1.isAfter(date2)  /  date1.isSameOrBefore(date2)  /  date1.isSameOrAfter(date2)
    let dataAnteriorHoje = dataConvertida.isBefore(moment());

    let ehValido = dataConvertida.isValid() && dataAnteriorHoje && dezoitoAnosAtras && dataDigitada.length === 10; // 10/05/2001

    // para setar o texto de erro em vermelho
    let erroData = document.getElementById('date-registration-error');
    erroData.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}

const adicionarMascaraData = (input, data) => {
    let listaCaracteres = [...data];
    // [ '1', '0', '0', '5' ]
    
    if(listaCaracteres && listaCaracteres.length) {
        let dataDigitada = listaCaracteres.filter(c => !isNaN(parseInt(c))).reduce((a, b) => a + b);
        // 10052
        const { length } = dataDigitada;

        switch(length) { 
            case 0: case 1: case 2:
                input.value = dataDigitada; 
                break;
            case 3: case 4:
                input.value = `${dataDigitada.substr(0, 2)}/${dataDigitada.substr(2, 2)}`; // 10/05
                break;
            default:
                input.value = `${dataDigitada.substr(0, 2)}/${dataDigitada.substr(2, 2)}/${dataDigitada.substr(4, 4)}`;
        }
    }
}
//#endregion Validação Data

//#region Resetar Campos
const resetarCampos = (...campos) => {
    campos.forEach(c => c.value = '');
};
//#endregion

//#region Ir Para Outra Pagina
const irPara = (origem, destino) => {
    let elementoOrigem = document.getElementById(origem);
    let elementoDestino = document.getElementById(destino);
    elementoDestino.className = elementoDestino.className.replace('d-none', 'd-flex');
    elementoOrigem.className = elementoOrigem.className.replace('d-flex', 'd-none');
};
//#endregion Ir Para Outra Pagina

//#region Validar dados dos inputs do cadastro
const validarCadastro = () => {
    let cadastroValido = validarData() && validarEmail() && validarSenha();
    console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);

    if(cadastroValido) {
        cadastrarUsuario();
    }
};
//#endregion Validar dados dos inputs do cadastro

// dica: utilizar para o editar
const irParaComClick = evento => {
    console.log(evento);
}

// -------------------------Metodos GET - POST - PUT - DELETE-------------------------

//#region Validar longin com os dados do banco usando GET
const validarLogin = () => {
    axios.get('http://localhost:3000/colaboradores')
        .then(response => {
            let emailDigitado = document.getElementById('email-input-login').value;
            let senhaDigitada = document.getElementById('password-input-login').value;
            
            let podeLogar = response.data.some(c => c.email === emailDigitado && c.senha === senhaDigitada);

            if(podeLogar) {
                irPara('login', 'home');
            }
        })
        .catch(error => console.error(error));
};
//#endregion Validar longin com os dados do banco usando GET

//#region Listando usuarios cadastrados do banco usando GET
const listarUsuarios = () => {


    // Endpoint
    axios.get('http://localhost:3000/colaboradores').then(response => {
        
        response.data.forEach(e => {
            let li = document.createElement('li');
            let botaoEditar = document.createElement('button');
            let botaoExcluir = document.createElement('button');
            let div = document.createElement('div');
            botaoEditar.innerText = "Editar"
            botaoExcluir.innerText = "Excluir"
            div.appendChild(li);
            div.appendChild(botaoEditar);
            div.appendChild(botaoExcluir);
            document.getElementById("user-list").appendChild(div)
            li.innerText = e.nome;
            div.setAttribute('class', 'd-flex bg-secondary')
            botaoEditar.setAttribute('class', 'mr-4 ml-4')
            botaoEditar.setAttribute('id', e.id);
            botaoExcluir.setAttribute('id', e.id);
            console.log(div);
        })
    }).catch(error => console.error(error));
};
//#endregion Listando usuarios cadastrados do banco usando GET

//#region Cadastrar colaborador no banco usando POST
const cadastrarUsuario = () => {

    let nomeInput = document.getElementById("name-input-registration");
    let dataInput = document.getElementById('date-input-registration');
    let emailInput = document.getElementById('email-input-registration');
    let senhaInput = document.getElementById('password-input-registration');

    let colaborador = new Colaborador(nomeInput.value, dataInput.value, emailInput.value, senhaInput.value );

    // Endpoint
    axios.post('http://localhost:3000/colaboradores', colaborador)
        .then((response) => {
            console.log('Colaborador cadastrado => ', response.data);
            resetarCampos(nomeInput, dataInput, emailInput, senhaInput);
            irPara('registration', 'login');
        })
        .catch((error) => {
            console.log('Erro => ', error);
        });
};
//#endregion Cadastrar colaborador no banco usando POST

//#region Deletar um colaborador no banco usando DELETE
const deletarUsuario = () => {
    let codigoColaborador = Number.parseInt(prompt("codigo do colaborador a excluir: "));
    axios.delete(`http://localhost:3000/colaboradores/${codigoColaborador}`).catch(error => console.error(error));
}
//#endregion Deletar um colaborador

//#region Atualizar um colaborador no banco usando PUT
const atualizarColaborador = () => {
    let codigoColaboradorAtualizar = Number.parseInt(prompt("codigo do colaborador a excluir: "));
    let nomeTeste = "teste"
    let dataNascimentoTeste = "00/00/0000"
    let emailTeste = "teste@gmail.com"
    let senhaTeste = "000000000"

    let atualizarColaborador = new Colaborador(nomeTeste, dataNascimentoTeste, emailTeste, senhaTeste);

    //enpoint
    axios.put(`http://localhost:3000/colaboradores/${codigoColaboradorAtualizar}`, atualizarColaborador).catch(error => console.error(error));
}
//#endregion Atualizar um colaborador no banco usando PUT

//#region Buscar dados do colaborador usando GET e set esses dados nos inputs
const buscarDadosColaboradorSetarNosInputs = () => {
    let codigoColaborador = 2;
    let nomeInput = document.getElementById("name-input-edit");
    let dataInput = document.getElementById('date-input-edit');
    let emailInput = document.getElementById('email-input-edit');
    let senhaInput = document.getElementById('password-input-edit');

    let colaborador = new Colaborador(nomeInput.value, dataInput.value, emailInput.value, senhaInput.value );

    axios.get(`http://localhost:3000/colaboradores/${codigoColaborador}`).then((response => {
        response.data.forEach(e => {

        })
    })).catch(error => console.error(error));


};
//#endregion Buscar dados do colaborador usando GET e set esses dados nos inputs



// -------------------------Classes-------------------------

//#region Classe de Colaborador
class Colaborador {
    nome = '';
    dataNascimento = '';
    email = '';
    senha = '';

    constructor(nomeParametro, dataNascimentoParametro, emailParametro, senhaParamentro){
        this.nome = nomeParametro;
        this.dataNascimento = dataNascimentoParametro;
        this.email = emailParametro;
        this.senha = senhaParamentro;
    }
};
//#endregion Classe de Colaborador