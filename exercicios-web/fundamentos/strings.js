const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Não causa erro ao programa, porém não mostra nada no terminal

console.log(escola.charCodeAt(3))
console.log(escola.indexOf('r'))

console.log(escola.substring(2)) // O terminal começará a partir do indice 2, sem incluí-lo
console.log(escola.substring(0,3)) // O terminal mostrará começando do índice 0 até o indice 3, porém sem incluir o 3.

console.log('Escola '.concat(escola).concat("!"))

console.log(escola.replace(/\d/, 'e')) // Curso de RegEx, /\d\ serve para substituir todos os digitos pela letra E

console.log('Ana, Maria, Pedro'.split(',')) // .split eh usado para criar um array na sentenca



