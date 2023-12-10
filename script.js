class hero {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }

  atacar() {
    console.log(
      `o heroi ${this.nome} do tipo ${this.tipo} atacou usando ${this.ataque}`
    );
  }
}

const ferdinando = new hero("Ferdinando", 21, "Animal", "Chifrada");
ferdinando.atacar();

const darth_vader = new hero(
  "Darth Vader",
  121,
  "Espadachim",
  "Força da mente"
);
darth_vader.atacar();
