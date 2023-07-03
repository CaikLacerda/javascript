const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: '200'
}

console.log(ferrari.prototype) // Nao ira funcionar pois quande se trata de OBJETO se usa o atributo __proto__
console.log(ferrari.__proto__) // A partir disso eu tenho acesso para saber quem e o objeto pai

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // Nao tem um prototipo maior, ou seja, resultado eh Null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)