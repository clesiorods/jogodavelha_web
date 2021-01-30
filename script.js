var q1 = tabuleiro.children[0];
var q2 = tabuleiro.children[1];
var q3 = tabuleiro.children[2];
var q4 = tabuleiro.children[3];
var q5 = tabuleiro.children[4];
var q6 = tabuleiro.children[5];
var q7 = tabuleiro.children[6];
var q8 = tabuleiro.children[7];
var q9 = tabuleiro.children[8];
var rodada = 1;



function jogar(pos) {

    if(rodada %2 === 0){
        tabuleiro.children[pos].selected = "O";
        tabuleiro.children[pos].children[0].classList.remove("ponto");
        tabuleiro.children[pos].children[0].classList.add("circulo");

    } else {
        tabuleiro.children[pos].selected = "X";
        tabuleiro.children[pos].children[0].classList.remove("ponto");
        tabuleiro.children[pos].children[0].classList.add("eixo45");

        var novo_eixo_2 = document.createElement("div");
        novo_eixo_2.classList.add("eixo90");
        tabuleiro.children[pos].children[0].appendChild(novo_eixo_2);
    }
    rodada++;
    if(rodada > 9) {
        setTimeout( () => {window.alert("Empate!")}, 1000);
    }
}



function vitoria() {
    if((q1.selected === q2.selected) &&
       (q1.selected === q3.selected)) 
        {   
            if(quemGanhou(q1.selected)) {
                comemoracao(q1, q2, q3);
            }
        } 
        else if((q4.selected === q5.selected) &&
                (q4.selected === q6.selected)) 
        {
            if(quemGanhou(q4.selected)) {
                comemoracao(q4, q5, q6);
            }
        } 
        else if((q7.selected === q8.selected) &&
                (q7.selected === q9.selected)) 
        {
            if(quemGanhou(q7.selected)) {
                comemoracao(q7, q8, q9);
            }
        }
        else if((q1.selected === q4.selected) &&
                (q1.selected === q7.selected))
        {
            if(quemGanhou(q1.selected)) {
                comemoracao(q1, q4, q7);
            }
        }
        else if((q2.selected === q5.selected) &&
                (q2.selected === q8.selected))
        {
            if(quemGanhou(q2.selected)) {
                comemoracao(q2, q5, q8);
            }
        }
        else if((q3.selected === q6.selected) &&
                (q3.selected === q9.selected))
        {
            if(quemGanhou(q3.selected)) {
                comemoracao(q3, q6, q9);
            }
        }
        else if((q1.selected === q5.selected) &&
                (q1.selected === q9.selected))
        {
            if(quemGanhou(q1.selected)) {
                comemoracao(q1, q5, q9);
            }
        }
        else if((q3.selected === q5.selected) &&
                (q3.selected === q7.selected))
    {
            if(quemGanhou(q3.selected)) {
                comemoracao(q3, q5, q7);
            }
    }
}

function quemGanhou(p) {
    if(p === "X"){
        setTimeout(() => {window.alert("Votória do X!")}, 500);
        return true;
    } else if(p === "O") {
        setTimeout(() => {window.alert("Votória do O!")}, 500);
        return true;
    }
}

function comemoracao(qx, qy, qz) {
    qx.style.backgroundColor = "rgb(0, 225, 42)";
    qy.style.backgroundColor = "rgb(0, 225, 42)";
    qz.style.backgroundColor = "rgb(0, 225, 42)";
}