const validarEmail = () => { // deve retornar um boolean (true = válido, false = inválido)
    /* 
        adicionar um eventListener para o evento "change" do input email-input que terá como ação esta função de validarEmail
        deve validar as seguintes regras:
        1 - obrigatório ter uma letra como primeiro caractér;
        2 - obrigatório possuir um '@';
        3 - obrigatório possuir pelo menos um '.' (ponto) depois do '@' e não podem estar juntos, ex: email@.ig // inválido pois o ponto está junto do arroba;
        4 - não pode terminar com '.' (ponto), ex: "email@pessoal.";
        5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inválido pois tem somente o 'c' depois do '.';

        obs: caso o email (value) que está no input for inválido deverá alterar a class da span com id="email-registration-error" para que fique somente com text-danger, sem a parte que diz 'd-none' (display: none) para que mostre a mensagem de erro
            e caso o email seja válido adicione a class d-none para que o aviso suma
    */
}


const validarSenha = () => { // deve retornar um boolean (true = válido, false = inválido)
    
    /* 
        // TODO: falta fazer
        1 - obrigatório ter ao menos uma letra minúscula;
        5 - a senha não pode conter espaços em branco;
        6 - obrigatório ter ao menos uma letra maiúscula;
    */


    //variaveis a serem utilizadas
    ehValido = true;
    let senhaDigitada = document.getElementById('password-input-registration').value;
    let arrayChar = [ ...senhaDigitada ];
    
    
    //saber se o valor inserido possui 8 caracteres.
    let possuiOitoCaracteres = senhaDigitada.length >= 8;


    //saber se o valor possui letras.
    let possuiLetra = arrayChar.some( char => char.toLowerCase() !== char.toUpperCase() );

    //saber se esxite pelo menos um caractere maiusculo.
    let possuiLetraMaiuscula = arrayChar.some( char => (char.toLowerCase() !== char.toUpperCase()) && (char === char.toUpperCase()) )

    //saber se existe pelo menos um caractere menusculo
    let possuiLetraMinuscula = arrayChar.some( char => (char.toLowerCase() !== char.toUpperCase()) && (char === char.toLowerCase()) )

    //saber se o valor possui pelo um caracter especial.
    let possuiCharEspecial = arrayChar.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );

    //saber se o valor possui pelo menos um numero.
    let possuiNumero = arrayChar.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );

    //saber se o valor inserido contem espaços.
    let naoPossuiEspacos = arrayChar.some(char => char === ' ');

    if(!possuiOitoCaracteres) {
        ehValido = false;
    }
    if(!possuiLetra) {
        ehValido = false;
    }
    if(!possuiCharEspecial) {
        ehValido = false;
    }    
    if(!possuiNumero) {
        ehValido = false;
    }
    if(!possuiLetraMaiuscula){
        ehValido = false;
    }
    if(!possuiLetraMinuscula){
        ehValido = false;
    }


    ehValido = possuiOitoCaracteres && possuiCharEspecial && possuiNumero && possuiLetraMaiuscula && possuiLetraMinuscula && !naoPossuiEspacos;


    if(!ehValido && senhaDigitada !== '') {
        document.getElementById('password-registration-error').innerText = "Senha inválida"
        document.getElementById('password-registration-error').className = "text-danger"
    } else {
        document.getElementById('password-registration-error').innerText = "a"
        document.getElementById('password-registration-error').className = "d-none"
    }

    
    return ehValido;
}

const validarData = () => {

    /* 
        1 - deve ser uma data válida;
        2 - não pode ser uma data futura;
    */


    //variaveis a ser utilizadas;    
    let ehValido = true;
    let dataDeHoje = moment();
    let inputData = document.getElementById('date-input-registration');
    let dataDigitada = inputData.value;
    let dataConvertida = moment(dataDigitada, 'DDMMYYYY');


    // colocar uma / apos 2 digitos digitados
    // for(let i = 0; i < dataConvertida.length; i++){
    //     if(dataConvertida.length === 2){
    //         console.log('passou do 2')
    //     }
    // }


    //validar se é uma data futura


    //validar se a data digitada possui 18 anos acima
    let maiorDe18 = dataDeHoje.diff(dataConvertida, 'years') >= 18; 


    //verificar se a data é uma data valida;
    let dataExistente = dataConvertida.isValid();


    //possui pelo menos 8 caracteres digitados;
    let possuiOitoCaracteres = dataDigitada.length >= 8;


    if(!dataExistente){
        ehValido = false;
      }
    if (!possuiOitoCaracteres){
        ehValido = false;
    }
    if(!maiorDe18){
        ehValido = false;
    }
    

    ehValido = dataExistente && possuiOitoCaracteres && maiorDe18;


    //mostrar pra o usuario se ta valido ou nao o que ele inserir;
    if(!ehValido && dataDigitada !== '') {
        document.getElementById('date-registration-error').innerText = "Data inválida"
        document.getElementById('date-registration-error').className = "text-danger"
    } else {
        document.getElementById('date-registration-error').innerText = "a"
        document.getElementById('date-registration-error').className = "d-none"
    }


    return ehValido;
}





const validarCadastro = () => {
    alert(`Cadastro ${validarData() && validarEmail() && validarSenha() ? 'válido!' : 'inválido'}`);
}



const programa = () => {
    
}



programa();