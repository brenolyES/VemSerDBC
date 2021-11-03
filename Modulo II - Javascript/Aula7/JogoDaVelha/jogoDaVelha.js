const casasDefalt = document.getElementsByClassName("casa");
let casas = document.getElementsByClassName("casa");
const jogadorX = "X";
const jogadorO = "O";
let jogadorVez = jogadorX;
let pontuaçãoX = 0;
let pontuaçãoO = 0;
var a, b, c;
let botao = document.getElementById('iniciarEReiniciar');
let tituloJogo = document.getElementById('tituloJogo');
let ganhou = 'Partida Empatada';
let quemGanhou;

let mudarEstiloComVitoria = () => {
    casas[a].style.backgroundColor='green'; casas[b].style.backgroundColor='green'; casas[c].style.backgroundColor='green';
    casas[a].style.color='white'; casas[b].style.color='white'; casas[c].style.color='white';
}

let vitoria = () => {
    if((casas[0].innerText === casas[1].innerText) && (casas[1].innerText === casas[2].innerText) && (casas[2].innerText != '')) {
		a = 0; b = 1; c = 2;
        mudarEstiloComVitoria();
        quemGanhou = casas[0];
        ganhou = 'ganhou';
        return console.log("ganhou")
	}else if((casas[3].innerText === casas[4].innerText) && (casas[4].innerText === casas[5].innerText) && (casas[5].innerText != '')) {
		a = 3; b = 4; c = 5;
        mudarEstiloComVitoria();
        quemGanhou = casas[3];
        ganhou = 'ganhou';
        return console.log("ganhou")
	} else if((casas[6].innerText === casas[7].innerText) && (casas[7].innerText === casas[8].innerText) && (casas[8].innerText != '')) {
		a = 6; b = 7; c = 8;
        mudarEstiloComVitoria();
        quemGanhou = casas[6];
        ganhou = 'ganhou';
        return console.log("ganhou")
	}else if((casas[0].innerText === casas[3].innerText) && (casas[3].innerText === casas[6].innerText) && (casas[6].innerText != '')) {
		a = 0; b = 3; c = 6;
        mudarEstiloComVitoria();
        quemGanhou = casas[0];
        ganhou = 'ganhou';
        return console.log("ganhou")
	}else if((casas[1].innerText === casas[4].innerText) && (casas[4].innerText === casas[7].innerText) && (casas[7].innerText != '')) {
		a = 1; b = 4; c = 7;
        mudarEstiloComVitoria();
        quemGanhou = casas[1];
        ganhou = 'ganhou';
        return console.log("ganhou")
	}else if((casas[2].innerText === casas[5].innerText) && (casas[5].innerText === casas[8].innerText) && (casas[8].innerText != '')) {
		a = 2; b = 5; c = 8;
        mudarEstiloComVitoria();
        quemGanhou = casas[2];
        ganhou = 'ganhou';
        return console.log("ganhou")
	}else if((casas[0].innerText === casas[4].innerText) && (casas[4].innerText === casas[8].innerText) && (casas[8].innerText != '')) {
		a = 0; b = 4; c = 8;
        mudarEstiloComVitoria();
        quemGanhou = casas[0];
        ganhou = 'ganhou';
        return console.log("ganhou")
	}else if((casas[2].innerText === casas[4].innerText) && (casas[4].innerText === casas[6].innerText) && (casas[6].innerText != '')) {
		a = 2; b = 4; c = 6;
        mudarEstiloComVitoria();
        quemGanhou = casas[2];
        ganhou = 'ganhou';
        return console.log("ganhou")
	}
    
    return console.log(ganhou);
}

let colocarXouO = () => {
    for (let i = 0; i < casas.length; i++) {
        casas[i].addEventListener('click', () => {
                if(ganhou !== "ganhou"){
                    if (casas[i].innerText === '' && jogadorVez === jogadorX) {
                        casas[i].innerText = "X";
                        casas[i].style.color = 'red';
                        document.getElementById('jogadorX').style.backgroundColor = 'white';
                        document.getElementById('jogadorO').style.backgroundColor = '#CCC';
                        jogadorVez = jogadorO; 
                    } else if (casas[i].innerText === '' && jogadorVez === jogadorO) { 
                        casas[i].innerText = "O";
                        casas[i].style.color = 'blue';
                        document.getElementById('jogadorO').style.backgroundColor = 'white';
                        document.getElementById('jogadorX').style.backgroundColor = '#CCC';
                        jogadorVez = jogadorX;
                    } else {console.log("campo ja foi jogado");} 
                }
                if(ganhou !== "ganhou"){
                    vitoria();
                }
            }  
        )
    } 
}


let iniciar = () => {
    botao.addEventListener('click', () => {
        colocarXouO()
        document.getElementById('informacoes').removeChild(botao);
        document.getElementById('jogadorX').style.backgroundColor = '#CCC';
        document.getElementById('jogadorO').style.backgroundColor = 'white';
    })
    
}

iniciar();

