class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {      // Como definir que uma classe tem outra classe como prototipo
    constructor(sobrenome, profissao = 'Professor')  {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Lacerda', 'Programador')
    }
}

const filho = new Filho
console.log(filho)