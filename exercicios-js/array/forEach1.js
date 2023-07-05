// O forEach sempre ira passar dois parametros, o nome e o indice

const aprovados = ['Caik', 'Pedro', 'Raul', 'Vitor']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}. ${nome} `)
})

aprovados.forEach(nome => console.log(nome))
console.log()

const exibirAprovados = (aprovados, numero) => console.log(aprovados, numero + 1 )
aprovados.forEach(exibirAprovados)
