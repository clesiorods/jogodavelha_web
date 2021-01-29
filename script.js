//////////////CAPTURA DE ELEMENTOS DO HTML///////////////
var tabuleiro = document.querySelector("div#tabuleiro");


//////////////FUNÇÃO DE RENDER DO TABULEIRO//////////////
function render(){
    for(i=0; i<=8; i++) {
        var nova_celula = document.createElement("div");
        nova_celula.classList.add("celula");
        nova_celula.setAttribute('key', i);
        tabuleiro.appendChild(nova_celula);

        var novo_ponto = document.createElement("div");
        novo_ponto.classList.add("ponto");
        nova_celula.appendChild(novo_ponto);

        nova_celula.selected = "null";

        nova_celula.onclick = function() {
            if(this.selected === "null"){
                jogar(this.getAttribute('key'));
                marcar(this.getAttribute('key'));
            }
        }
        nova_celula.onmouseover = function() {
            destacar(this.getAttribute('key'));
        }
        nova_celula.onmouseleave = function() {
            fora(this.getAttribute('key'));
        }
    }
}
render();


function marcar(pos) {
    if(tabuleiro.children[pos].selected === "X") {
        tabuleiro.children[pos].children[0].style.backgroundColor = "rgb(0, 32, 70)";
        tabuleiro.children[pos].children[0].children[0].style.backgroundColor = "rgb(0, 32, 70)";
        tabuleiro.children[pos].children[0].style.width = '140px';
        tabuleiro.children[pos].children[0].children[0].style.width = '140px';
        tabuleiro.children[pos].children[0].style.opacity = "1";
    
    } else if(tabuleiro.children[pos].selected === "O") {
        tabuleiro.children[pos].children[0].style.borderColor = "rgb(0, 32, 70)";
        tabuleiro.children[pos].children[0].style.opacity = "1";
    }
}

function destacar(pos) {
    if(tabuleiro.children[pos].selected === "null") {
        tabuleiro.children[pos].children[0].style.opacity = ".3";
    } else if(tabuleiro.children[pos].selected === "X"){
        tabuleiro.children[pos].children[0].style.backgroundColor = "rgb(0, 15, 35)";
        tabuleiro.children[pos].children[0].children[0].style.backgroundColor = "rgb(0, 15, 35)";
        tabuleiro.children[pos].children[0].style.width = '150px';
        tabuleiro.children[pos].children[0].children[0].style.width = '150px';
        tabuleiro.children[pos].children[0].style.opacity = "1";
    } else if(tabuleiro.children[pos].selected === "O") {
        tabuleiro.children[pos].children[0].style.borderColor = "rgb(0, 15, 35)";
        tabuleiro.children[pos].children[0].style.width = '77px';
        tabuleiro.children[pos].children[0].style.height = '77px';
        tabuleiro.children[pos].children[0].style.opacity = "1";
        tabuleiro.children[pos].children[0].style.margin = "14px";
    }
}

function fora(pos) {
    if(tabuleiro.children[pos].selected === "null") {
        tabuleiro.children[pos].children[0].style.opacity = ".03";
    } else if(tabuleiro.children[pos].selected === "X") {
        tabuleiro.children[pos].children[0].style.backgroundColor = "rgb(0, 32, 70)";
        tabuleiro.children[pos].children[0].children[0].style.backgroundColor = "rgb(0, 32, 70)";
        tabuleiro.children[pos].children[0].style.width = '140px';
        tabuleiro.children[pos].children[0].children[0].style.width = '140px';
    } else if(tabuleiro.children[pos].selected === "O") {
        tabuleiro.children[pos].children[0].style.width = '70px';
        tabuleiro.children[pos].children[0].style.height = '70px';
        tabuleiro.children[pos].children[0].style.borderColor = "rgb(0, 32, 70)";
        tabuleiro.children[pos].children[0].style.margin = "16.5px";
    }
}

function venceu() {
    if( tabuleiro.children[0].selected === "X" && 
        tabuleiro.children[1].selected === "X" && 
        tabuleiro.children[2].selected === "X"){
            window.alert("Venceu!");
        }
}


var rodada = 1;
function jogar(pos) {

    if(rodada %2 === 0){
        console.log("O");
        tabuleiro.children[pos].selected = "O";
        tabuleiro.children[pos].children[0].classList.remove("ponto");
        tabuleiro.children[pos].children[0].classList.add("circulo");

    } else {
        console.log("X");
        tabuleiro.children[pos].selected = "X";
        tabuleiro.children[pos].children[0].classList.remove("ponto");
        tabuleiro.children[pos].children[0].classList.add("eixo45");

        var novo_eixo_2 = document.createElement("div");
        novo_eixo_2.classList.add("eixo90");
        tabuleiro.children[pos].children[0].appendChild(novo_eixo_2);
    }
    rodada++;
}