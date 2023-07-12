function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

// Usar o operador NEW, vai criar um objeto com o prototipo apontado ao da funcao (no caso do exemplo a funcao Aula.prototype)

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Ate Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) { 

    const obj = {}  // Voce cria um objeto novo

    obj.__proto__ = f.prototype  // Associa o prototipo desse objeto ao prototipo da funcao

    f.apply(obj, params) // Executa a funcao apartir da funcao apply, passando o objeto e os parametros desejados

    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Ate Breve', 456)
console.log(aula3, aula4)