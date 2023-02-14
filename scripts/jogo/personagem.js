class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.puloDuplo = 2;
    this.alturaDoPulo = -50;
    this.invencivel = false;
  }

  pula() {
    if (this.puloDuplo > 0) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.puloDuplo--;
      return true;
    }
    
    return false;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.velocidadeDoPulo = 0;
      this.puloDuplo = 2;
    }
  }
  tornarInvencivel() {
    this.invencivel = true;
    
    
    setTimeout(() => {
      this.invencivel = false;
      this.imagem = imagemPersonagem;
    }, 1000);
    
}
  estaColidindo(inimigo) {
    if(this.invencivel) {
      this.imagem = imagemPersonagemColisao;
      return false;
    }
    
    const precisao = 0.8;
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    )
    
    return colisao;
  }
}

/** let footer = document.querySelector('.botao-tela-inicial')
let visibleOn = false

function Onvisible(){
  if(visibleOn){
    footer.style.visiblity = 'hidden'
    visiblity = false

  }else{
    footer.style.visiblity = 'visible'
    visibleOn = true
  }
}

let sandra = Onvisible()

**/