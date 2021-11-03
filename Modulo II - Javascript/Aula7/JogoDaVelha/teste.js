let casas = document.getElementsByClassName("casa");
const jogadorX = "X";
const jogadorO = "O";
let jogadorVez = jogadorX;
let parar = 0;
let ganhou = '';


let JogadorXJogar = () => {

}



for (let i = 0; i < casas.length; i++) {

    
    casas[i].addEventListener('click', () => {
        

        if (casas[i].innerText === '' && jogadorVez === jogadorX) {
            casas[i].innerText = "X";
            casas[i].style.color = 'red';
            document.getElementById('jogadorX').style.backgroundColor = 'white';
            document.getElementById('jogadorO').style.backgroundColor = '#CCC';
            jogadorVez = jogadorO;
            vitoria();
        }

        else if (casas[i].innerText === '' && jogadorVez === jogadorO) {
            casas[i].innerText = "O";
            casas[i].style.color = 'blue';
            document.getElementById('jogadorO').style.backgroundColor = 'white';
            document.getElementById('jogadorX').style.backgroundColor = '#CCC';
            jogadorVez = jogadorX;
            vitoria();
        }

        else { console.log("campo ja foi jogado"); }

        
    })
    
}

var vitoria = () => {
    if ((casas[0].innerText === casas[1].innerText) && (casas[1].innerText === casas[2].innerText) && (casas[2].innerText != '')) {
        console.log('ganhou')
    } else if ((casas[3].innerText === casas[4].innerText) && (casas[4].innerText === casas[5].innerText) && (casas[5].innerText != '')) {
        
    } else if ((casas[6].innerText === casas[7].innerText) && (casas[7].innerText === casas[8].innerText) && (casas[8].innerText != '')) {
        
    } else if ((casas[0].innerText === casas[3].innerText) && (casas[3].innerText === casas[6].innerText) && (casas[6].innerText != '')) {
        
    } else if ((casas[1].innerText === casas[4].innerText) && (casas[4].innerText === casas[7].innerText) && (casas[7].innerText != '')) {
        
    } else if ((casas[2].innerText === casas[5].innerText) && (casas[5].innerText === casas[8].innerText) && (casas[8].innerText != '')) {
        
    } else if ((casas[0].innerText === casas[4].innerText) && (casas[4].innerText === casas[8].innerText) && (casas[8].innerText != '')) {
        
    } else if ((casas[2].innerText === casas[4].innerText) && (casas[4].innerText === casas[6].innerText) && (casas[6].innerText != '')) {
        
    }
}
