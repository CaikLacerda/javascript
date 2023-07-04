console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Lacerda'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd'].first())

String.prototype.toString = function() {  // Muito cuidado ao adicionar funcionamentos para funcoes ja existentes, pois podem causar bugs
    return 'Lascou tudo'
}

console.log('Caik Dias'.reverse())