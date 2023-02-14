var pontosUsuario = 0;


var pontosComputador = 0;

function capturaMaoUsuario() {
    let maoUsuario = parseInt(prompt("Escolha uma opção: \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura"));
    return maoUsuario;
}

function capturaMaoComputador() {
    let maoComputador = parseInt(Math.floor(Math.random() * 3) + 1);
    return maoComputador;
}

function jogar() {
    let maoUsuario = capturaMaoUsuario();
    let maoComputador = capturaMaoComputador();

    console.log("Sua mão: " + maoUsuario);
    console.log("Mão do computador: " + maoComputador);
    console.log("\n")

    switch(maoUsuario) {
        case maoComputador:
            alert("Empate!");
            break;

        case 1: // Pedra
        if(maoComputador == 2) {
            alert("Você perdeu!");
            pontosComputador++;
        } else {
            alert("Você ganhou!");
            pontosUsuario++;
        }  break;

        case 2: // Papel
        if(maoComputador == 3) {
            alert("Você perdeu!");
            pontosComputador++;
        } else {
            alert("Você ganhou!");
            pontosUsuario++;
        }  break;
        case 3: // Tesoura
        if(maoComputador == 1) {
            alert("Você perdeu!");
            pontosComputador++;
        } else {    
            alert("Você ganhou!");
            pontosUsuario++;
        }

    }
    console.log("Pontos do usuário: " + pontosUsuario);
    console.log("Pontos do computador: " + pontosComputador);

    ganhador();
}

    function ganhador() {
        if(pontosUsuario == 2) {
            alert("Você ganhou!");
        } else if(pontosComputador == 2) {
            alert("Você perdeu!");
        }
    }

function resetarPontuacao(){
    pontosUsuario = 0;
    pontosComputador = 0;
    alert("Pontuação resetada!");
}


