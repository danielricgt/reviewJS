class Rectangulo {
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base       = base;
    this.altura     = altura;
    this.#area = base * altura;
  }


}

export const rectangulo =  new Rectangulo(10, 20);

