class TelaInicial {
  constructor() {

  }

  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(150);
    fill('#8386b5')
    text('BRUXINHA SANDRA', width / 2, height / 9 * 4);
  }

  _botao() {
    botaoGerenciador.y = height / 11 * 6;
    botaoGerenciador.draw();
  }
}