const assarBolo = () => {
    return new Promise((resolve, reject) => {
        // imaginem um monte de código aqui para assar o bolo..

        let boloAssado = true;
        if(boloAssado)
            resolve('O bolo foi assado.');
        else
            reject('Algo de errado ocorreu na hora de assar o bolo.');
    });
}
 
const jogarAlgumJogo = () => {
    return new Promise((resolve, reject) => {
        // código para jogar o jogo...

        let jogoTerminado = true;
        if(jogoTerminado)
            resolve('Terminei de jogar.');
        else
            reject('Algo de errado ocorreu com a jogatina.');
    });
}
 
const lerLivro = () => {
    return new Promise((resolve, reject) => {
        // código do livro sendo lido...

        let livroLido = true;
        if(livroLido)
            resolve('O livro foi lido.');
        else
            reject('Algo de errado ocorreu ao ler o livro.');
    });
}



assarBolo().then((msg) => {
    console.log("MSG da função assarBolo: " + msg);
    return jogarAlgumJogo();
}).then((msg) => {
    console.log("MSG da função jogarAlgumJogo: " + msg);
    return lerLivro();
}).then((msg) => {
    console.log("MSG da função lerLivro: " + msg);
    console.log("Tudo concluído");
});