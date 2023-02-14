class Pontuacao {
  constructor() {
    this.pontos = 0
  }
  
  exibe() {
    textAlign(RIGHT);
    textFont(fonteTelaInicial);
    fill('#D8BFD8')
    textSize(40);
    text(parseInt(this.pontos), width - 45, 65)
  }
  
  adicionarPonto() {
    this.pontos += 0.1;
  }
}