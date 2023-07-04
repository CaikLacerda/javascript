// JSON = Java Script Object Notation, basicamente eh um formato textual da linguagem

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }

console.log(JSON.stringify(obj)) // Para converter um objeto para o formato JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Com isso iremos gerar um objeto a partir de um texto
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))