function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  botaoGerenciador = new BotaoGerenciador('iniciar', width / 2, height / 2);

  cenas = {
    jogo,
    telaInicial
  };

  jogo.setup();
  frameRate(40);
  somDoJogo.loop();
  somDoJogo.setVolume(0.2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}