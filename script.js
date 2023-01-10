//Adicionando um intervalo de execução
window.onload = function () {
        setInterval(executar, 1000 / 30);
}
        /*Foi deixado fora da função pois ao inicio do loop estava voltando a 
          bola a sua posição inicial não deixando ela avançar.
        */

        var movimentoParaBaixoX = movimentoParaDireitaY = 5;

function executar() {

        var folhaDesenho = document.getElementById("papper");

        //Quantidades de contexto no Canvas
        var areDesenho = folhaDesenho.getContext("2d");

        var larguraCampo = 600;
        var alturaCampo = 500;
        var AlturaRaquete = 150;
        var larguraLinha = larguraBola = 5;


        //Criando o retângulo
        areDesenho.fillStyle = '#000000';
        areDesenho.fillRect(0, 0, larguraCampo, alturaCampo);

        //Dividindo o retângulo ao meio
        areDesenho.fillStyle = '#ffffff';
        areDesenho.fillRect(larguraCampo / 2 - larguraLinha / 2, 0, larguraLinha, alturaCampo);

        //Primeiro adversário
        areDesenho.fillStyle = '#00ff00';
        areDesenho.fillRect(larguraCampo - larguraLinha, 180, larguraLinha, AlturaRaquete)

        //Segundo adversário
        areDesenho.fillStyle = '#00ff00';
        areDesenho.fillRect(0, 180, larguraLinha, AlturaRaquete)


        //Dando cor a bola
        areDesenho.fillStyle = '#00ff00';
        //Criando a bola
        areDesenho.fillRect(movimentoParaDireitaY, movimentoParaBaixoX, larguraLinha, larguraBola);

        movimentoParaBaixoX = movimentoParaDireitaY + 1;
        movimentoParaDireitaY = movimentoParaBaixoX + 1;

        console.log("Olá");
};
