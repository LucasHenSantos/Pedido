document.addEventListener("DOMContentLoaded", function () {
    let botaoNao = document.getElementById("nao");
    let botaoSim = document.getElementById("sim");
    

    function posicionarInicialmente() {
        let posSim = botaoSim.getBoundingClientRect();
        let margem = 10; // Espaço entre os botões

        botaoNao.style.position = "relative";
        botaoNao.style.left = `${margem}px`;
    }

    posicionarInicialmente();

    botaoNao.addEventListener("mouseover", moverBotao);
    botaoNao.addEventListener("touchstart", moverBotao);

    function moverBotao() {
        let distancia = 1000; // Distância que o botão pode fugir

        let novoX = Math.random() * distancia * 2 - distancia;
        let novoY = Math.random() * distancia * 2 - distancia;

        let botaoRect = botaoNao.getBoundingClientRect();
        let larguraJanela = window.innerWidth;
        let alturaJanela = window.innerHeight;

        // Ajusta para manter dentro dos limites da tela
        let maxX = larguraJanela - botaoRect.width - 20;
        let maxY = alturaJanela - botaoRect.height - 20;

        let atualX = botaoNao.offsetLeft + novoX;
        let atualY = botaoNao.offsetTop + novoY;

        // Garante que o botão não saia da tela
        atualX = Math.max(0, Math.min(atualX, maxX));
        atualY = Math.max(0, Math.min(atualY, maxY));

        botaoNao.style.transform = `translate(${atualX - botaoNao.offsetLeft}px, ${atualY - botaoNao.offsetTop}px)`;
    }
    
});
