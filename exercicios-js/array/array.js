let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'   // Normalmente usado para substituir um elemento
aprovados.push('Caik')   // Mais utilizado quando for adicionar um elemento
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort()  // Reorganiza o array, para uma sequencia alfabetica por padrao
console.log(aprovados)

delete aprovados[1]  // Quando deletado um indice, ele continua existindo porem como undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // O primeiro numero indica de qual indice ele ira iniciar, e o segundo quantos iram ser excluidos/substituidos

console.log(aprovados)
console.log(aprovados[2])