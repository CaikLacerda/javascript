let dobro = function(a) {
    return 2*a
}

dobro = (a) => {  // Nao precisamos escrever function para declarar a funcao
    return 2*a
}

dobro = a => 2*a  // Quande se tem apenas 1 parametro nao precisa usar parenteses, e quando o codigo tiver uma linha a funcao return ja vai estar implicitamente chamada

const triplo = a => 3*a

console.log(dobro(2))
console.log(triplo(2))

let ola = () => 'Ola'
console.log(ola())