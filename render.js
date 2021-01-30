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

        nova_celula.selected = "N";

        nova_celula.onclick = function() {
            if(this.selected === "N"){
                jogar(this.getAttribute('key'));
                marcar(this.getAttribute('key'));
                vitoria();
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
    if(tabuleiro.children[pos].selected === "N") {
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
    if(tabuleiro.children[pos].selected === "N") {
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