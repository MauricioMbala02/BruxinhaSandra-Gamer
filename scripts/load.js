function preload() {
  imagemCenario1 = loadImage('imagens/cenario/cenario1.png');
  imagemCenario2 = loadImage('imagens/cenario/cenario2.png');
  imagemCenario3 = loadImage('imagens/cenario/cenario3.png');
  imagemCenario4 = loadImage('imagens/cenario/cenario4.png');
  imagemCenario5 = loadImage('imagens/cenario/cenario5.png');
  imagemCenario6 = loadImage('imagens/cenario/cenario6.png');
  imagemCenario7 = loadImage('imagens/cenario/cenario7.png');
  imagemCenario8 = loadImage('imagens/cenario/cenario8.png');
  imagemCenario9 = loadImage('imagens/cenario/cenario9.png');
  imagemCenarioLuzes1 = loadImage('imagens/cenario/cenarioLuzes1.png');
  imagemCenarioLuzes2 = loadImage('imagens/cenario/cenarioLuzes2.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemPersonagemColisao = loadImage('imagens/personagem/colisao.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/vida.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  fita = loadJSON('fita/fita.json');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somDoPulo.mp3');
}