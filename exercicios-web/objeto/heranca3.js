const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // Usando esse codigo voce define qual sera o prototipo do objeto, no caso de filha1 sera o objeto pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}       // Voce pode definir valores junto com o prototipo do objeto
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {  // Para percorrer todos atributos de um objeto
    filha2.hasOwnProperty(key) ?      // Para separar as keys que sao da propriedade e as que vieram por heranca
        console.log(key) : console.log(`Por heranca: ${key}`)
}