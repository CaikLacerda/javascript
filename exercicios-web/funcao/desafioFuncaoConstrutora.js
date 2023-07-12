// Minha resolucao do desafio (Deu errado)
function Pessoa (nome) {
    this.nome = nome
    this.getSaudacaoNome = () => `Meu nome eh ${this.nome}`
}

const Caik = new Pessoa
console.log(Caik.getSaudacaoNome())




// Resolucao do professor
function Pessoa2(nome) {
    this.nome = nome

    this.falar = () => console.log(`Meu nome eh ${this.nome}`)
}

const p1 = new Pessoa2('Isabela')
p1.falar()