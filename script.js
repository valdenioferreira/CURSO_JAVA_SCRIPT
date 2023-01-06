var folhaDesenho = document.getElementById("papper");

        //Quantidades de contexto no Canvas
        var areDesenho = folhaDesenho.getContext("2d");

        var larguraCampo = 600;
        var alturaCampo = 500;
        var larguraLinha = 5;
        var larguraBola = 5;
        var AlturaRaquete = 150;

        //Criando o retângulo
        areDesenho.fillStyle = '#000000';
        areDesenho.fillRect(0, 0, larguraCampo, alturaCampo);
        
        //Dividindo o retângulo ao meio
        areDesenho.fillStyle = '#ffffff';
        areDesenho.fillRect(larguraCampo/2 - larguraLinha/2, 0, larguraLinha, alturaCampo);

        //Primeiro adversário
        areDesenho.fillStyle = '#00ff00';
        areDesenho.fillRect(larguraCampo - larguraLinha, 180, larguraLinha, AlturaRaquete)

        //Segundo adversário
        areDesenho.fillStyle = '#00ff00';
        areDesenho.fillRect(0, 180, larguraLinha, AlturaRaquete)

        //Criando a bola
        areDesenho.fillStyle = '#00ff00';
        areDesenho.fillRect(30, 5, larguraLinha , larguraBola);