const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO 

const falardePessoa = pessoa.falar.bind(pessoa)  // Bind eh usado para definir qual sera o local em que sera executado
falardePessoa()